import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code, 
  Briefcase, 
  FolderOpen, 
  Mail,
  Cpu
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <Card className={`card-nexus border-animated backdrop-blur-lg ${isScrolled ? 'shadow-intense' : ''}`}>
          <div className="px-6 py-3">
            <div className="flex items-center space-x-1">
              {/* Logo */}
              <div className="flex items-center space-x-2 mr-6">
                <div className="w-8 h-8 bg-gradient-nexus rounded-lg flex items-center justify-center shadow-nexus">
                  <Cpu className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary hidden sm:block">Digital Nexus</span>
              </div>

              {/* Navigation Items */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-primary/20 text-primary shadow-nexus'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </Button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden ml-auto"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </Card>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 left-4 right-4">
            <Card className="card-nexus border-animated">
              <div className="p-4">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full justify-start space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-primary/20 text-primary shadow-nexus'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-secondary/20">
        <div 
          className="h-full bg-gradient-nexus transition-all duration-150 ease-out"
          style={{
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>

      {/* Floating Action Button for Quick Contact (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button
          onClick={() => scrollToSection('contact')}
          className="btn-nexus w-14 h-14 rounded-full shadow-intense animate-float"
        >
          <Mail className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
};

export default Navigation;