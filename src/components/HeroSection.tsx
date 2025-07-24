import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Terminal, Code, Database, Cloud } from 'lucide-react';
import krishnaProfile from '@/assets/krishna-profile.png';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Initializing Neural Interface...';

  useEffect(() => {
    setIsLoaded(true);
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Cyber Core Interface */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1"></div>
              </div>
              
              {/* Middle ring */}
              <div className="absolute inset-4 rounded-full border border-primary/50 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary-glow rounded-full -translate-x-1/2 -translate-y-0.5"></div>
              </div>
              
              {/* Core Interface */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary shadow-intense bg-gradient-cyber flex items-center justify-center">
                <div className="text-4xl font-bold text-primary animate-pulse-glow">
                  KV
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Center glow */}
              <div className="absolute inset-12 rounded-full bg-primary/10 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-nexus bg-clip-text text-transparent animate-cyber-slide">
            Portfolio
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 text-glow">
            System Online
          </h2>

          {/* Typing animation */}
          <div className="mb-8">
            <p className="text-xl text-primary font-mono">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Status indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="card-nexus text-center">
              <Terminal className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-sm">Quantum pathways converging</p>
            </div>
            <div className="card-nexus text-center">
              <Code className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-sm">Creative fire ignition systems</p>
            </div>
            <div className="card-nexus text-center md:col-span-1 col-span-2">
              <Database className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-sm">Innovation protocols activated</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="border-animated h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-nexus animate-pulse"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Ready to enter...</p>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToNext}
            className="btn-nexus text-lg px-12 py-6 animate-float"
          >
            Enter the Digital Realm
          </Button>

          {/* Personal Introduction */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Hi There! I'm <span className="text-primary text-glow">Krishna Venu Subrahmanyam Oggu</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Software Developer | MERN Stack Developer
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;