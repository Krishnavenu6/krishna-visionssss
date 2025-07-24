import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  Linkedin, 
  Github, 
  ExternalLink,
  MapPin,
  Phone
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'krishnavenu256@gmail.com',
      href: 'mailto:krishnavenu256@gmail.com',
      color: 'text-primary'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/krishna-venu-subrahmanyam/',
      color: 'text-blue-400'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com/Krishnavenu6',
      color: 'text-white'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: null,
      color: 'text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Contact <span className="text-primary text-glow">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a tech conversation
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-nexus border-animated">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-nexus rounded-lg flex items-center justify-center shadow-nexus">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="flex items-center space-x-2 text-primary mb-2">
                    <User className="w-4 h-4" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-primary/30 focus:border-primary transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center space-x-2 text-primary mb-2">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-primary/30 focus:border-primary transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="flex items-center space-x-2 text-primary mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Subject</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-primary/30 focus:border-primary transition-all"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="flex items-center space-x-2 text-primary mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-primary/30 focus:border-primary transition-all min-h-[120px] resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-nexus w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-nexus border-animated">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to connect with fellow developers, potential collaborators, 
                  or anyone interested in technology. Feel free to reach out through any of the 
                  channels below.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="group">
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 p-4 bg-secondary/20 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all group"
                        >
                          <div className={`${contact.color} group-hover:animate-pulse-glow`}>
                            {contact.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-primary">{contact.label}</div>
                            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {contact.value}
                            </div>
                          </div>
                          {contact.href.startsWith('http') && (
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          )}
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4 p-4 bg-secondary/20 rounded-lg border border-primary/20">
                          <div className={contact.color}>
                            {contact.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-primary">{contact.label}</div>
                            <div className="text-sm text-muted-foreground">{contact.value}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Connect */}
            <Card className="card-nexus bg-gradient-cyber">
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-primary mb-4">Quick Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer a direct approach? Choose your preferred platform:
                </p>
                
                <div className="flex justify-center space-x-4">
                  <Button asChild variant="outline" className="btn-cyber">
                    <a 
                      href="mailto:krishnavenu256@gmail.com"
                      className="flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" className="btn-cyber">
                    <a 
                      href="https://www.linkedin.com/in/krishna-venu-subrahmanyam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="card-nexus">
              <div className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow"></div>
                  <div>
                    <div className="font-semibold text-primary">Available for Opportunities</div>
                    <div className="text-sm text-muted-foreground">
                      Open to new projects and collaborations
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;