
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FolderOpen, Award } from 'lucide-react';

const projects = [
  {
    title: "High-Precision Fruit Detection",
    description: "Developed a high-precision fruit detection model using YOLOv9, trained on a custom dataset of 10 fruit classes with bounding box annotations. Achieved mAP50 of 0.791, precision 0.81 and recall 0.689 with limited training data.",
    image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?auto=format&fit=crop&w=800&q=80",
    tags: ["Computer Vision", "YOLOv9", "Object Detection", "PyTorch"],
    liveLink: "#",
    repoLink: "https://github.com",
    applications: ["Logistic automation", "Autonomous fruit harvesting robots"]
  },
  {
    title: "Neural Style Transfer From Scratch",
    description: "Implemented novel neural style transfer architecture based on VGG16. Designed and coded an efficient style transfer pipeline that generates artistic visuals with exceptional quality and customizable stylization effects.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
    tags: ["Neural Style Transfer", "VGG16", "PyTorch", "Computer Vision"],
    liveLink: "#",
    repoLink: "https://github.com",
    applications: ["Artistic exploration", "Image editing and stylization"]
  },
  {
    title: "Automatic Song Skip in Movies",
    description: "Developed a machine learning model to automatically skip songs in movies using audio features extraction and classification. The framework outputs timestamps of songs present in movies with 90% accuracy and only 2-second average deviation.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    tags: ["Audio Classification", "PANNs", "Feature Extraction", "Machine Learning"],
    liveLink: "#",
    repoLink: "https://github.com",
    applications: ["Movie editing", "Content modification", "Viewer experience enhancement"]
  },
  {
    title: "Anemia Detection from Retinal Images",
    description: "Collaborated with Sankara Nethralaya to detect anemia from retinal fundus images using deep learning. Experimented with MobileNet V2, DenseNet 121, and ResNet50 models, achieving an AUC of 0.65 with data augmentation to address imbalance.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    tags: ["Medical AI", "CNN", "Gradcam", "Data Augmentation"],
    liveLink: "#",
    repoLink: "https://github.com",
    applications: ["Medical diagnostics", "Non-invasive disease detection"]
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
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
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
