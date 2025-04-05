
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, PenTool, Layers, BarChart, Server, Cloud, Workflow } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code className="text-primary" size={24} />,
    skills: ["Python", "R", "C++", "C", "Node.js"]
  },
  {
    name: "Deep Learning",
    icon: <Layers className="text-primary" size={24} />,
    skills: ["PyTorch", "TensorFlow", "Keras", "ONNX", "OpenVINO"]
  },
  {
    name: "Python Libraries",
    icon: <Code className="text-primary" size={24} />,
    skills: ["NumPy/Pandas", "Scikit-Learn", "OpenCV", "Matplotlib/Seaborn", "Streamlit"]
  },
  {
    name: "MLOps",
    icon: <Workflow className="text-primary" size={24} />,
    skills: ["MLflow", "DVC", "ZenML", "RAY", "NVIDIA Triton"]
  },
  {
    name: "Containerization & Web",
    icon: <Server className="text-primary" size={24} />,
    skills: ["Docker", "Kubernetes", "FastAPI", "Flask"]
  },
  {
    name: "Cloud & Tools",
    icon: <Cloud className="text-primary" size={24} />,
    skills: ["AWS", "AWS Sagemaker", "GCP", "CVAT", "Label Studio"]
  },
  {
    name: "Data & Messaging",
    icon: <Database className="text-primary" size={24} />,
    skills: ["Kafka", "Redis"]
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
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-sm font-medium">
                        {skill}
                      </li>
                    ))}
                  </ul>
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
