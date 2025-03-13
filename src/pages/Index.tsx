
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Akhil Agrawal - ML Engineer Portfolio";
  }, []);

  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Index;
