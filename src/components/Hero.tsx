
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Hi, I'm <span className="text-primary">{profile.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              {profile.role}
            </h2>
            <div className="flex justify-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>{profile.location}</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I build production-ready AI systems across LLMs, RAG, computer vision, video intelligence, and scalable ML infrastructure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">Download CV</a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 pt-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 opacity-0 animate-fade-in animate-delay-400">
          <a href="#experience" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
