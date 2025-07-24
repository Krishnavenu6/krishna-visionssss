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
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-auto max-w-4xl px-4 ${
          isScrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <Card className={`card-nexus border-animated backdrop-blur-lg ${isScrolled ? 'shadow-intense' : ''} w-full`}>
          <div className="px-3 md:px-6 py-2 md:py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-nexus rounded-lg flex items-center justify-center shadow-nexus">
                  <Cpu className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary text-sm md:text-base hidden sm:block">Portfolio</span>
              </div>

              {/* Navigation Items - Desktop */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-xs md:text-sm ${
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

              {/* Navigation Items - Tablet */}
              <div className="hidden md:flex lg:hidden items-center space-x-1">
                {navItems.slice(0, 4).map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-primary/20 text-primary shadow-nexus'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                    title={item.label}
                  >
                    {item.icon}
                  </Button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center"
                aria-label="Toggle navigation menu"
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
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 left-2 right-2">
            <Card className="card-nexus border-animated shadow-intense">
              <div className="p-4">
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full justify-start space-x-3 px-4 py-4 rounded-lg transition-all duration-200 text-left ${
                        activeSection === item.id
                          ? 'bg-primary/20 text-primary shadow-nexus'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3 w-full">
                        {item.icon}
                        <span className="font-medium text-base">{item.label}</span>
                      </div>
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
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <Button
          onClick={() => scrollToSection('contact')}
          className="btn-nexus w-12 h-12 md:w-14 md:h-14 rounded-full shadow-intense animate-float"
          aria-label="Contact me"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </div>
    </>
  );
};

export default Navigation;