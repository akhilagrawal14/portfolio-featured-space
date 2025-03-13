
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Hi, I'm <span className="text-primary">Akhil Agrawal</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Machine Learning Engineer
            </h2>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+91 9584293402</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg">
              A passionate Machine Learning Engineer with extensive experience in computer vision, natural language processing, and deploying ML solutions to production.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:akhilagrawal14@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block opacity-0 animate-fade-in animate-delay-200">
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full absolute -right-10 -top-10 w-80 h-80"></div>
            <div className="aspect-square border-2 border-primary/30 rounded-full absolute right-20 top-20 w-60 h-60"></div>
            <div className="relative z-10 bg-card shadow-lg rounded-2xl overflow-hidden border border-border">
              <div className="aspect-[3/4] bg-muted"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-lg font-medium">Your profile image would go here</p>
                </div>
              </div>
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
