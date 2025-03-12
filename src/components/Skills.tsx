
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, PenTool, Layers, BarChart, Users } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: <Code className="text-primary" size={24} />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 65 },
    ]
  },
  {
    name: "Databases",
    icon: <Database className="text-primary" size={24} />,
    skills: [
      { name: "SQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "Redis", level: 60 },
    ]
  },
  {
    name: "Design",
    icon: <PenTool className="text-primary" size={24} />,
    skills: [
      { name: "UI/UX", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 70 },
      { name: "Photoshop", level: 65 },
    ]
  },
  {
    name: "Frameworks",
    icon: <Layers className="text-primary" size={24} />,
    skills: [
      { name: "React", level: 90 },
      { name: "Vue", level: 75 },
      { name: "Angular", level: 65 },
      { name: "Express", level: 80 },
    ]
  },
  {
    name: "Analytics",
    icon: <BarChart className="text-primary" size={24} />,
    skills: [
      { name: "Data Analysis", level: 70 },
      { name: "Google Analytics", level: 75 },
      { name: "Data Visualization", level: 80 },
      { name: "Power BI", level: 65 },
    ]
  },
  {
    name: "Soft Skills",
    icon: <Users className="text-primary" size={24} />,
    skills: [
      { name: "Communication", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Problem Solving", level: 95 },
      { name: "Time Management", level: 80 },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Professional Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="font-heading font-semibold text-xl">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
