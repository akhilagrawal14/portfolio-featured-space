
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: "Senior Position",
    company: "Company Name",
    period: "2020 - Present",
    description: "Led a team of professionals in developing and implementing strategies that increased efficiency by 30%. Managed multiple projects simultaneously while meeting deadlines and exceeding expectations.",
    achievements: [
      "Increased department productivity by 25% through process optimization",
      "Led a team of 10 professionals across multiple departments",
      "Implemented new technologies that reduced costs by 15%"
    ]
  },
  {
    title: "Mid-level Position",
    company: "Previous Company",
    period: "2017 - 2020",
    description: "Collaborated with cross-functional teams to develop and implement strategies. Responsible for managing projects from concept to completion while ensuring all deliverables met quality standards.",
    achievements: [
      "Successfully completed 20+ projects with 100% client satisfaction",
      "Developed and maintained client relationships resulting in 40% repeat business",
      "Implemented workflow improvements that reduced project completion time by 20%"
    ]
  },
  {
    title: "Junior Position",
    company: "First Company",
    period: "2015 - 2017",
    description: "Assisted senior team members in daily operations and project execution. Gained valuable experience in all aspects of the business while developing professional skills.",
    achievements: [
      "Contributed to 15 successful projects under senior supervision",
      "Recognized for exceptional attention to detail and problem-solving abilities",
      "Rapidly advanced from entry-level to project lead within 18 months"
    ]
  },
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
                    </div>
                    
                    <div className="md:col-span-3">
                      <h3 className="font-heading font-semibold text-xl mb-2 text-primary">{job.title}</h3>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
