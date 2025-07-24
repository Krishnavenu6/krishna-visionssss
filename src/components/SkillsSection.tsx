import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Cloud, 
  Wrench, 
  Brain, 
  GitBranch,
  Cpu,
  Server,
  Monitor,
  Smartphone
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Professional',
      subtitle: 'Skillset',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'Python', 'Java', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js'],
      color: 'text-primary'
    },
    {
      title: 'Tools',
      subtitle: 'I use',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Windows', 'Linux', 'VS Code', 'Eclipse', 'Postman'],
      color: 'text-accent'
    },
    {
      title: 'Database',
      subtitle: 'I use',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'MySQL'],
      color: 'text-primary-glow'
    },
    {
      title: 'Cloud platforms',
      subtitle: 'I use',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Netlify', 'GitHub'],
      color: 'text-secondary-foreground'
    },
    {
      title: 'AI Tools',
      subtitle: 'I use',
      icon: <Brain className="w-6 h-6" />,
      skills: ['ChatGPT', 'Claude', 'Perplexity', 'NotebookLM', 'Gemini'],
      color: 'text-primary'
    },
    {
      title: 'Version control',
      subtitle: 'I use',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git'],
      color: 'text-accent'
    }
  ];

  const getIconForSkill = (skill: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'React': <Cpu className="w-4 h-4" />,
      'Node.js': <Server className="w-4 h-4" />,
      'MongoDB': <Database className="w-4 h-4" />,
      'MySQL': <Database className="w-4 h-4" />,
      'HTML': <Monitor className="w-4 h-4" />,
      'CSS': <Monitor className="w-4 h-4" />,
      'JavaScript': <Code className="w-4 h-4" />,
      'Python': <Code className="w-4 h-4" />,
      'Java': <Code className="w-4 h-4" />,
      'C': <Code className="w-4 h-4" />,
      'VS Code': <Monitor className="w-4 h-4" />,
      'Linux': <Server className="w-4 h-4" />,
      'Windows': <Monitor className="w-4 h-4" />,
      'Git': <GitBranch className="w-4 h-4" />,
      'GitHub': <GitBranch className="w-4 h-4" />,
      'Netlify': <Cloud className="w-4 h-4" />,
      'ChatGPT': <Brain className="w-4 h-4" />,
      'Claude': <Brain className="w-4 h-4" />,
      'Perplexity': <Brain className="w-4 h-4" />,
      'NotebookLM': <Brain className="w-4 h-4" />,
      'Gemini': <Brain className="w-4 h-4" />,
      'Postman': <Wrench className="w-4 h-4" />,
      'Eclipse': <Wrench className="w-4 h-4" />,
      'Tailwind CSS': <Monitor className="w-4 h-4" />
    };
    return iconMap[skill] || <Code className="w-4 h-4" />;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Tech <span className="text-primary text-glow">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mastering the digital realm with cutting-edge technologies and tools
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-nexus border-animated group hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`${category.color} group-hover:animate-pulse-glow`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${category.color}`}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 p-2 rounded-lg bg-secondary/30 hover:bg-primary/10 transition-all duration-200 group/skill"
                    >
                      <div className="text-primary group-hover/skill:animate-pulse-glow">
                        {getIconForSkill(skill)}
                      </div>
                      <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">
                        {skill}
                      </span>
                      {/* Skill proficiency stars */}
                      <div className="ml-auto flex space-x-1">
                        {[...Array(Math.floor(Math.random() * 2) + 4)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-2 h-2 bg-primary rounded-full group-hover/skill:animate-pulse-glow transition-all"
                            style={{ 
                              animationDelay: `${i * 100}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Mastery Level</span>
                    <span className="text-primary font-semibold">
                      Expert
                    </span>
                  </div>
                  <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-nexus animate-pulse"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="mt-16">
          <Card className="card-nexus border-animated">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Technology Mastery Overview
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-nexus rounded-full flex items-center justify-center mx-auto mb-4 shadow-nexus">
                    <Monitor className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Frontend Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern, responsive interfaces with React.js and cutting-edge CSS frameworks
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-nexus rounded-full flex items-center justify-center mx-auto mb-4 shadow-nexus">
                    <Server className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Robust server-side solutions with Node.js and database integration
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-nexus rounded-full flex items-center justify-center mx-auto mb-4 shadow-nexus">
                    <Brain className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">AI Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Leveraging AI tools and technologies for enhanced development workflows
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;