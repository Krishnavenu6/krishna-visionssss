import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar, Quote } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      level: 'B.Tech in ECE',
      institution: 'Swarnandhra College of Engineering And Technology',
      year: '2020 - 2024',
      cgpa: '7.96/10',
      location: 'Narsapur, A.P, India'
    },
    {
      level: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      year: '2017 - 2019',
      cgpa: '8.34/10',
      location: 'A.P, India'
    },
    {
      level: 'SSC',
      institution: 'Narayana EM High School',
      year: '2016 - 2017',
      cgpa: '9.5/10',
      location: 'Bhimavaram, A.P, India'
    }
  ];

  const interests = [
    'Playing Cricket',
    'Travelling',
    'Mobile Technology Enthusiast'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Know Who <span className="text-primary text-glow">I'M</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Introduction */}
          <div className="space-y-6">
            <Card className="card-nexus border-animated">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Personal Profile</h3>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Hi Everyone, I am <span className="text-primary font-semibold">Krishna Venu Subrahmanyam</span> from{' '}
                    <span className="text-primary font-semibold">Andhra Pradesh</span>,{' '}
                    <span className="text-primary font-semibold">India</span>.
                  </p>
                  <p className="text-muted-foreground">
                    I have completed B.tech in Electronics and Communication Engineering From 
                    Swarnandhra College of Engineering and Technology.
                  </p>
                  <p className="text-muted-foreground">
                    Programming has inspired a journey filled with continuous learning, creativity, 
                    and personal development. I am fluent in a range of programming languages including 
                    C, Python, Java, and JavaScript.
                  </p>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="card-nexus">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Apart from coding, activities I love:</h3>
                <div className="grid gap-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quote */}
            <Card className="card-nexus bg-gradient-cyber">
              <div className="p-8 text-center">
                <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
                <blockquote className="text-xl font-semibold text-primary text-glow mb-2">
                  "Everything is Connected"
                </blockquote>
                <cite className="text-muted-foreground">-- Krishna Venu Subrahmanyam</cite>
              </div>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-8">
              <span className="text-primary">EDUCATION</span>
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative ml-12 mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute -left-9 top-6 w-4 h-4 bg-primary rounded-full shadow-nexus animate-pulse-glow"></div>
                  
                  <Card className="card-nexus hover:shadow-intense transition-all duration-300">
                    <div className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-primary">{edu.level}</h4>
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          CGPA: {edu.cgpa}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span>{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Field of Interest */}
        <Card className="card-nexus mt-16 border-animated">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Field of Interest</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-muted-foreground mb-4">
                  My field of Interest's are building new Full Stack Websites and also in areas 
                  related to Artificial Intelligence and cybersecurity.
                </p>
                <p className="text-muted-foreground">
                  I apply my passion for developing products with frameworks like Modern Javascript 
                  Library and Frameworks like React.js and Node.js.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  I have worked with both databases MySQL and MongoDB, bringing versatility to 
                  data management solutions.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;