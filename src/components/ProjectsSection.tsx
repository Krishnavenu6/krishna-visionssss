import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Database, Shield, Lightbulb, ShoppingCart } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Profile Management System',
      description: 'A comprehensive user profile management system built with Spring Boot and React, featuring secure authentication and data management capabilities.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/Krishnavenu06/Profile_management_System_Sprin_React',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Online Exam Portal',
      description: 'A secure online examination platform with real-time monitoring, automated grading, and comprehensive reporting features.',
      technologies: ['Java', 'Spring Framework', 'MySQL', 'JavaScript'],
      githubUrl: 'https://github.com/Krishnavenu06/OnlineExamPortal',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Cat Light Switcher Web App',
      description: 'An interactive web application featuring playful animations and dynamic lighting effects with cat-themed UI elements.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Animations'],
      githubUrl: 'https://github.com/Krishnavenu06/Light-Switcher-Web-App',
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Bestselling Chairs Showcase',
      description: 'An elegant e-commerce interface showcasing premium furniture with modern design patterns and responsive layouts.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/Krishnavenu06/Explore-Our-Bestselling-Chairs-for-Comfort-and-Style-main',
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My Recent <span className="text-primary text-glow">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are my recent projects I've worked on recently, showcasing innovation and technical excellence
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-nexus border-animated group hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'cyber-slide 0.6s ease-out forwards'
              }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                {/* Project Icon & Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-white shadow-cyber group-hover:shadow-intense transition-all duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-glow transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary" 
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary/20 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">Complete</div>
                    <div className="text-xs text-muted-foreground">Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">Open</div>
                    <div className="text-xs text-muted-foreground">Source</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">Live</div>
                    <div className="text-xs text-muted-foreground">Demo</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    asChild
                    className="btn-nexus flex-1"
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="btn-cyber"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Project Metrics */}
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Tech Complexity</span>
                    <span className="text-primary font-semibold">Advanced</span>
                  </div>
                  <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-nexus animate-pulse"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-nexus inline-block">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Want to see more projects?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more exciting projects and contributions
              </p>
              <Button asChild className="btn-nexus">
                <a 
                  href="https://github.com/Krishnavenu06" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>Explore GitHub</span>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
