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
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { fullName, email, subject, message }: ContactFormData = await req.json()

    // Create PDF content as HTML (you can enhance this with a proper PDF library)
    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; padding: 10px; border-left: 4px solid #667eea; background: #f8f9fa; }
          .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
          .value { color: #333; }
          .message-box { background: white; border: 1px solid #ddd; padding: 15px; border-radius: 4px; margin-top: 10px; }
          .timestamp { color: #666; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Portfolio Contact Form Submission</h1>
          <p>New message from your portfolio website</p>
        </div>
        
        <div class="field">
          <div class="label">Full Name:</div>
          <div class="value">${fullName}</div>
        </div>
        
        <div class="field">
          <div class="label">Email Address:</div>
          <div class="value">${email}</div>
        </div>
        
        <div class="field">
          <div class="label">Subject:</div>
          <div class="value">${subject}</div>
        </div>
        
        <div class="field">
          <div class="label">Message:</div>
          <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="timestamp">
          Submitted on: ${new Date().toLocaleString()}
        </div>
      </body>
      </html>
    `

    // Convert HTML to PDF using Puppeteer (you'll need to add this dependency)
    // For now, we'll send the HTML content as an attachment
    
    // Send email using Resend (you'll need to add your Resend API key to Supabase secrets)
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not found in environment variables')
    }

    const emailData = {
      from: 'Portfolio Contact <onboarding@resend.dev>', // Using Resend's default verified domain
      to: ['krishnavenu256@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #667eea;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      `,
      attachments: [
        {
          filename: `contact-form-${Date.now()}.html`,
          content: Buffer.from(pdfContent).toString('base64'),
          content_type: 'text/html'
        }
      ]
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Failed to send email: ${error}`)
    }

    const result = await response.json()

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
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})