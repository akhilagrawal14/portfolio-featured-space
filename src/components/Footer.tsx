
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Award } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading font-bold text-lg">Akhil Agrawal</h3>
            <p className="text-muted-foreground text-sm">Machine Learning Engineer</p>
          </div>
          
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <Award size={16} className="text-primary" />
              <span>Excellence Award from Senior Leadership, Comcast, 2023</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award size={16} className="text-primary" />
              <span>GATE CSE 2019 - AIR 388 (99.66 percentile)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/akhilagrawal14" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akhilagrawal-ml/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:akhilagrawal14@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Akhil Agrawal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
