
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, PenTool, Layers, BarChart, Server, Cloud, Workflow } from 'lucide-react';

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
    name: "Programming Languages",
    icon: <Code className="text-primary" size={24} />,
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 75 },
      { name: "C++", level: 80 },
      { name: "C", level: 85 },
      { name: "Node.js", level: 80 },
    ]
  },
  {
    name: "Deep Learning",
    icon: <Layers className="text-primary" size={24} />,
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 85 },
      { name: "ONNX", level: 80 },
      { name: "OpenVINO", level: 90 },
    ]
  },
  {
    name: "Python Libraries",
    icon: <Code className="text-primary" size={24} />,
    skills: [
      { name: "NumPy/Pandas", level: 95 },
      { name: "Scikit-Learn", level: 90 },
      { name: "OpenCV", level: 90 },
      { name: "Matplotlib/Seaborn", level: 85 },
      { name: "Streamlit", level: 80 },
    ]
  },
  {
    name: "MLOps",
    icon: <Workflow className="text-primary" size={24} />,
    skills: [
      { name: "MLflow", level: 90 },
      { name: "DVC", level: 80 },
      { name: "ZenML", level: 75 },
      { name: "RAY", level: 85 },
      { name: "NVIDIA Triton", level: 80 },
    ]
  },
  {
    name: "Containerization & Web",
    icon: <Server className="text-primary" size={24} />,
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 75 },
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 80 },
    ]
  },
  {
    name: "Cloud & Tools",
    icon: <Cloud className="text-primary" size={24} />,
    skills: [
      { name: "AWS", level: 90 },
      { name: "AWS Sagemaker", level: 80 },
      { name: "GCP", level: 90 },
      { name: "CVAT", level: 80 },
      { name: "Label Studio", level: 85 },
    ]
  },
  {
    name: "Data & Messaging",
    icon: <Database className="text-primary" size={24} />,
    skills: [
      { name: "Kafka", level: 75 },
      { name: "Redis", level: 75 },
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
