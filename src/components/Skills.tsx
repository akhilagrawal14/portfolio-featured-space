import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Layers, Server, Cloud, Workflow } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "LLM / GenAI",
    icon: <Layers className="text-primary" size={24} />,
    skills: ["RAG", "LangChain", "Gemini API", "Milvus", "FAISS", "Prompt Engineering"]
  },
  {
    name: "Programming",
    icon: <Code className="text-primary" size={24} />,
    skills: ["Python", "R", "C++", "C"]
  },
  {
    name: "Web Development",
    icon: <Server className="text-primary" size={24} />,
    skills: ["FastAPI", "Flask", "Node.js", "asyncio"]
  },
  {
    name: "ML / DL Libraries",
    icon: <Layers className="text-primary" size={24} />,
    skills: ["PyTorch", "PyTorch Lightning", "Keras", "TensorFlow", "Scikit-learn", "ONNX", "OpenVINO"]
  },
  {
    name: "MLOps & Inference",
    icon: <Workflow className="text-primary" size={24} />,
    skills: ["MLflow", "DVC", "ZenML", "Ray", "NVIDIA Triton", "TensorRT", "torch.compile", "Quantization"]
  },
  {
    name: "Streaming & Infra",
    icon: <Database className="text-primary" size={24} />,
    skills: ["Kafka", "Pub/Sub", "Docker", "Kubernetes", "Microservices", "Distributed Systems"]
  },
  {
    name: "Cloud & Data",
    icon: <Cloud className="text-primary" size={24} />,
    skills: ["GCP", "AWS", "NumPy", "Pandas", "Matplotlib", "OpenCV"]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="font-heading font-semibold text-xl">{category.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
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
