
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, FolderOpen, Award } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoLink?: string;
  applications: string[];
  hasPublicCode: boolean;
}

const projects: Project[] = [
  {
    title: "Cross-Domain Semantic Search using RAG and Gemini Embedding",
    description: "Built a personal knowledge search tool similar to Spotlight using Gemini Embedding, supporting search across text files, PDFs, code, notes, and emails while indexing 5,000+ documents.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["RAG", "Gemini Embedding", "FastAPI", "Hybrid Retrieval"],
    applications: ["Personal knowledge search", "Enterprise document retrieval", "Developer productivity"],
    hasPublicCode: false
  },
  {
    title: "Multimodal Fake Content Detection",
    description: "Built a fake-vs-real detection system across image, video, audio, and text using facial landmarks, biometric signals, computer vision features, and Gemini-based reasoning.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
    tags: ["Multimodal AI", "Computer Vision", "Gemini", "Fraud Detection"],
    applications: ["KYC verification", "Fraud prevention", "Content authenticity"],
    hasPublicCode: false
  },
  {
    title: "High-Precision Fruit Detection",
    description: "Developed a high-precision fruit detection model using YOLOv9, trained on a custom dataset of 10 fruit classes with bounding box annotations. Achieved mAP50 of 0.791, precision 0.81 and recall 0.689 with limited training data.",
    image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?auto=format&fit=crop&w=800&q=80",
    tags: ["Computer Vision", "YOLOv9", "Object Detection", "PyTorch"],
    repoLink: "https://github.com/akhilagrawal14/fruit_detection_yolov4",
    applications: ["Logistic automation", "Autonomous fruit harvesting robots"],
    hasPublicCode: true
  },
  {
    title: "Neural Style Transfer From Scratch",
    description: "Implemented novel neural style transfer architecture based on VGG16. Designed and coded an efficient style transfer pipeline that generates artistic visuals with exceptional quality and customizable stylization effects.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
    tags: ["Neural Style Transfer", "VGG16", "PyTorch", "Computer Vision"],
    repoLink: "https://github.com/akhilagrawal14/computer_vision/tree/main/deep_learning/neural_style_transfer",
    applications: ["Artistic exploration", "Image editing and stylization"],
    hasPublicCode: true
  },
  {
    title: "Anemia Detection from Retinal Images",
    description: "Collaborated with ISI Kolkata and Sankara Nethralaya to detect anemia from retinal fundus images. Experimented with MobileNet V2, DenseNet 121, and ResNet50, achieving 0.75 AUC on a small imbalanced clinical dataset.",
    image: "/lovable-uploads/62b44eb4-5908-47d5-a97e-3bc5982175bf.png",
    tags: ["Medical AI", "CNN", "Gradcam", "Data Augmentation"],
    applications: ["Medical diagnostics", "Non-invasive disease detection", "Clinical AI research"],
    hasPublicCode: false
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="inline-block mr-2">
            <FolderOpen size={32} className="inline text-primary" />
          </span>
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  <div className="mt-4 mb-4">
                    <h4 className="font-medium text-sm flex items-center gap-2 mb-2">
                      <Award size={16} className="text-primary" />
                      Potential Applications
                    </h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {project.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    {project.hasPublicCode && project.repoLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
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

export default Projects;
