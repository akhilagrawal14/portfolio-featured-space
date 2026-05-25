
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { profile } from '@/data/profile';

const Index = () => {
  useEffect(() => {
    document.title = profile.title;
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
