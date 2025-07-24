import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20 bg-gradient-cyber">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <Card className="card-nexus inline-block">
            <div className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-nexus rounded-lg flex items-center justify-center shadow-nexus animate-pulse-glow">
                  <Cpu className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Digital Nexus Portfolio</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                A futuristic showcase of innovation, technology, and creative excellence 
                in the digital realm.
              </p>

              {/* Version Badge */}
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30">
                  Version 5.2
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30">
                  2025 Edition
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Portfolio Evolution Timeline */}
        <div className="mb-8">
          <h4 className="text-center text-lg font-semibold text-primary mb-6">
            Portfolio Evolution Journey
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              { version: 'v1.0', desc: 'HTML/CSS/JS Foundation' },
              { version: 'v2.x', desc: 'React & Backend' },
              { version: 'v3.x', desc: 'Theme & Admin' },
              { version: 'v4.x', desc: 'Content & SEO' },
              { version: 'v5.x', desc: 'Modern UI' },
              { version: 'v5.2', desc: 'Current' }
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold text-primary">
                  {milestone.version}
                </div>
                <div className="text-xs text-muted-foreground">{milestone.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Designed and Developed by</span>
              <span className="text-primary font-semibold">Krishna Venu Subrahmanyam</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse-glow" />
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-primary" />
                <span>Built with React + TypeScript</span>
              </div>
              <div className="hidden md:block">•</div>
              <span>© {currentYear} All rights reserved</span>
            </div>
          </div>

          {/* Tech Stack Attribution */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground mb-2">
              Powered by cutting-edge technologies
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn/UI'].map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-primary/5 text-primary border-primary/30 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;