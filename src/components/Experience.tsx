
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: "Machine Learning Engineer - SDE 2",
    company: "Fynd (Shopsense Retail Technologies Ltd.)",
    period: "July 2024 - Present",
    location: "Mumbai, India",
    description: "Owns GPU-backed ML infrastructure and production model serving for image and video AI systems.",
    achievements: [
      "Served as DRI for GPU-based ML infrastructure on GCP and Kubernetes, owning 40+ production models across video super-resolution, image super-resolution, and AI background removal.",
      "Reduced GPU infrastructure costs by 28%, approximately $4,000 per month, through dynamic scaling, TensorRT, torch.compile, model quantization, and resource optimization.",
      "Deployed Flux on dual L4 GPU instances, achieving a 45.5% cost reduction compared with A100-based deployment.",
      "Designed an intent-aware prompt routing system for image editing, routing requests across self-hosted models, Replicate, Fal.ai, and Flux based on user intent and cost constraints.",
      "Integrated Kafka and Pub/Sub for event-driven ML inference, reducing p95 processing latency by 20% compared with the earlier synchronous pipeline.",
      "Migrated ML workloads to Ray for distributed execution, reducing batch processing time by 20% and compute costs by 10%."
    ]
  },
  {
    title: "Machine Learning Engineer 2 / 3",
    company: "Comcast India Engineering Center",
    period: "July 2021 - July 2024",
    location: "Chennai, India",
    description: "Built production ML systems for semantic video search, RAG-based retrieval, OCR validation, and celebrity recognition.",
    achievements: [
      "Built a production semantic video search system that lets ad-tech clients query scenes with natural language across 5,000+ hours of NBC, Universal Studios, and Sky content.",
      "Used CLIP, an in-house model, vector databases, and Elasticsearch to support 2-3 second query latency with room for further scale.",
      "Built a RAG-based sports LLM prototype using OpenAI embeddings, Milvus, summary indexing, captions, and web sources, improving retrieval precision by 38% over a keyword-search baseline.",
      "Owned the data, model, and deployment pipeline for a celebrity recognition framework using MTCNN, FaceNet embeddings, hybrid clustering, and a 12,000+ celebrity reference dataset.",
      "Built an OCR validation pipeline for Xfinity TV that processed 8,000+ queries per day with 94% agreement with human annotators, replacing manual QA review."
    ]
  },
  {
    title: "Summer Intern - Machine Learning",
    company: "Comcast India Engineering Center",
    period: "May 2020 - July 2020",
    location: "Chennai, India",
    description: "Research internship focused on cricket match video analysis and highlight generation using ML techniques.",
    achievements: [
      "Developed a computer vision and OCR pipeline to detect scoreboard patterns in cricket match videos.",
      "Contributed to a highlight generation system that went to production for Sky live broadcasting."
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
