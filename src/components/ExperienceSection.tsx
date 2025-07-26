import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink, Download, Award, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    title: 'Internship (Virtual)',
    role: 'MERN Stack Developer',
    company: 'IIDT By Blackbuck Engineers',
    duration: 'January 18, 2024 - April 15, 2024',
    location: 'Virtual',
    type: 'Full-time',
    description: [
      'Completed a 240-hour long-term internship over 12 weeks as part of the MERN Stack Development course, Blackbuck Engineers, and APSCHE.',
      'Gained hands-on project-based learning and practical exposure under the guidance of industry mentors, enhancing my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Benefitted from APSCHE\'s internship portal, which provides valuable interactive sessions and logical challenges that kept the learning experience engaging and fun.'
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'REST APIs'],
    certificateUrl: 'https://drive.google.com/file/d/1OkpDFrHXhWmQnITX0j921Pe__gJ-Hm3W/view',
    achievements: [
      '240 hours of intensive training',
      'Industry mentor guidance',
      'Project-based learning approach',
      'APSCHE certification'
    ]
  };

  const resumeUrl = 'https://drive.google.com/file/d/1yhVaY63CtF0otl_996aSDuoy4HKQfKM8/view?usp=sharing';

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Professional <span className="text-primary text-glow">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on learning and industry collaboration
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <Card className="card-nexus border-animated mb-12">
            <div className="p-8">
              {/* Experience Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-nexus rounded-lg flex items-center justify-center shadow-nexus">
                      <Building className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{experience.title}</h3>
                      <p className="text-lg font-semibold text-muted-foreground">{experience.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{experience.location}</span>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0">
                  <Button asChild className="btn-cyber">
                    <a 
                      href={experience.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-4">Experience Overview</h4>
                <div className="space-y-3">
                  {experience.description.map((desc, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
                      <p className="text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-4">Technologies Mastered</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {experience.achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg border border-primary/20"
                    >
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Resume Section */}
          <Card className="card-nexus border-animated">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-nexus rounded-full flex items-center justify-center mx-auto mb-6 shadow-intense animate-float">
                <Download className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                Complete Professional Profile
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Download my comprehensive resume to get detailed information about my skills, 
                projects, and professional journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-nexus">
                  <a 
                    href={resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download My Resume</span>
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="btn-cyber">
                  <a 
                    href={resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Online</span>
                  </a>
                </Button>
              </div>

              {/* Resume Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">240+</div>
                  <div className="text-xs text-muted-foreground">Training Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <div className="text-xs text-muted-foreground">Latest Update</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
