
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const projects = [
  {
    title: "Project One",
    description: "A comprehensive web application built using modern technologies. Features include user authentication, real-time data processing, and responsive design.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://example.com",
    repoLink: "https://github.com",
  },
  {
    title: "Project Two",
    description: "Mobile application developed for iOS and Android platforms. Includes features like push notifications, offline functionality, and integration with third-party services.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Redux", "API Integration"],
    liveLink: "https://example.com",
    repoLink: "https://github.com",
  },
  {
    title: "Project Three",
    description: "Data visualization dashboard that processes and displays complex information in an intuitive interface. Built with a focus on performance and usability.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["D3.js", "Vue.js", "Python", "PostgreSQL"],
    liveLink: "https://example.com",
    repoLink: "https://github.com",
  },
  {
    title: "Project Four",
    description: "E-commerce platform with integrated payment processing, inventory management, and user account features. Designed for scalability and ease of use.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    liveLink: "https://example.com",
    repoLink: "https://github.com",
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
                        Live Demo
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
