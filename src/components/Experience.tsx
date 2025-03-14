
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: "Machine Learning Engineer- SDE 2",
    company: "Fynd (Shopsense Retail Technologies Ltd.)",
    period: "July 2024 - Present",
    location: "Mumbai, India",
    description: "Leading ML engineering initiatives at Fynd, focusing on advanced computer vision applications and production-ready ML systems.",
    achievements: [
      "Developed and deployed AI models to production, including Video Super-Resolution, AI Background Extend, and Soft Shadow Generator",
      "Deployed Flux model on dual L4 GPU instances, achieving a 45.5% cost reduction compared to A100 GPUs",
      "Transitioned large ML models to platforms like Replicate and Fal.ai, optimizing cost and performance",
      "Migrated machine learning workloads to Ray for improved scalability and performance",
      "Integrated Pub/Sub and Kafka to optimize processing architecture and reduce latency",
      "Built a video processing service that can performs frame-by-frame ML operations and generates video output"
    ]
  },
  {
    title: "Machine Learning Engineer 3",
    company: "Comcast India Engineering Center",
    period: "April 2024 - July 2024",
    location: "Chennai, India",
    description: "Promoted to higher role with increased responsibilities in ML system design and implementation.",
    achievements: [
      "Worked on OCR component For Xfinity TV to validate voice query and output in TV is good enough or not. It will be used to remove human validator in the loop.",
      "Developed sports-focused Large Language Model(LLM) utilizing RAG-based vector and summary indexing for comprehensive sports information retrieval (captions & web sources).",
      "Engineered a video scene search system that leveraged natural language processing to accurately identify scenes based on text descriptions. This system is currently in production and is being used by ad tech clients."
    ]
  },
  {
    title: "Machine Learning Engineer 2",
    company: "Comcast India Engineering Center",
    period: "July 2021 - March 2024",
    location: "Chennai, India",
    description: "Developed and deployed various ML solutions for video processing, scene recognition, and content analysis.",
    achievements: [
      "Owned development of high precision celebrity recognition framework (data, model, deployment). Now productionized and used by NBC, Sky, and other popular broadcaster platforms.",
      "Developed a machine learning-based movie poster generator from movie scenes and transcripts",
      "Conducted research on vector databases like Milvus for face matching, logo search, and audio search",
      "Developed an Image captioning system to explore more relevant content of videos",
      "Developed a proof of concept for Intro detection of TV-series using audio features"
    ]
  },
  {
    title: "Summer Intern - Machine Learning",
    company: "Comcast India Engineering Center",
    period: "May 2020 - July 2020",
    location: "Chennai, India",
    description: "Research internship focused on cricket match video analysis and highlight generation using ML techniques.",
    achievements: [
      "Researched and identified patterns to generate cricket highlight generation using machine learning",
      "Worked on low latency computer vision algorithms from OCR outputs",
      "Fine-tuned Tesseract OCR model for different symbols and colors for different scorecards",
      "Work went into production for version 1 of highlight generation used by Sky for live broadcasting"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="inline-block mr-2"><Briefcase size={32} className="inline text-primary" /></span>
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <Card className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <div className="text-sm text-muted-foreground">{job.period}</div>
                      <h3 className="font-heading font-semibold text-lg mt-1">{job.company}</h3>
                      <div className="text-sm text-muted-foreground mt-1">{job.location}</div>
                    </div>
                    
                    <div className="md:col-span-3">
                      <h3 className="font-heading font-semibold text-xl mb-2 text-primary">{job.title}</h3>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      {job.achievements.length > 0 && (
                        <>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <ArrowRight size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
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

export default Experience;
