import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Function started. Method:', req.method)
    
    // Validate request method
    if (req.method !== 'POST') {
      console.log('Invalid method:', req.method)
      return new Response(
        JSON.stringify({ success: false, error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Parse request body
    let formData: ContactFormData
    try {
      const body = await req.text()
      console.log('Raw body:', body)
      formData = JSON.parse(body)
      console.log('Parsed data:', formData)
    } catch (parseError) {
      console.error('Error parsing request body:', parseError)
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid request body' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const { fullName, email, subject, message } = formData

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Check for RESEND_API_KEY
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found')
      return new Response(
        JSON.stringify({ success: false, error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log('Sending email...')

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px;">New Portfolio Contact</h1>
          <p style="margin: 10px 0 0 0;">Message from your portfolio website</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <div style="margin-bottom: 15px;">
            <strong style="color: #667eea;">Name:</strong> ${fullName}
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #667eea;">Email:</strong> ${email}
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #667eea;">Subject:</strong> ${subject}
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #667eea;">Message:</strong>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #667eea; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <p style="color: #666; font-size: 12px; text-align: center;">
          Received on: ${new Date().toLocaleString()}
        </p>
      </div>
    `

    // Send email using Resend
    const emailData = {
      from: 'Portfolio Contact <noreply@resend.dev>',
      to: ['krishnavenu256@gmail.com'],
      reply_to: [email], // Resend API expects an array
      subject: `Portfolio Contact: ${subject}`,
      html: emailHtml
    }

    console.log('Email data to send:', JSON.stringify(emailData, null, 2));

    console.log('Making request to Resend API...')
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    console.log('Resend API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Resend API error status:', response.status)
      console.error('Resend API error response:', errorText)
      
      let errorMessage = `Email service error: ${response.status}`
      try {
        const errorData = JSON.parse(errorText)
        if (errorData.message) {
          errorMessage = errorData.message
        }
      } catch (e) {
        // Keep default error message
      }

      return new Response(
        JSON.stringify({ 
          success: false, 
          error: errorMessage,
          details: errorText 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    const result = await response.json()
    console.log('Email sent successfully:', result.id)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: result.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})