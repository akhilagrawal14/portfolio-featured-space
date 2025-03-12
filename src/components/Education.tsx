
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationHistory = [
  {
    degree: "Master's Degree",
    field: "Field of Study",
    institution: "University Name",
    location: "City, Country",
    period: "2018 - 2020",
    description: "Graduated with honors. Specialized in relevant areas with focus on practical applications. Participated in research projects and published papers in academic journals."
  },
  {
    degree: "Bachelor's Degree",
    field: "Field of Study",
    institution: "University Name",
    location: "City, Country",
    period: "2014 - 2018",
    description: "Completed undergraduate studies with distinction. Engaged in extracurricular activities including club leadership, volunteer work, and internships to gain practical experience."
  },
  {
    degree: "Professional Certification",
    field: "Specialization Area",
    institution: "Certification Authority",
    location: "Online / City, Country",
    period: "2021",
    description: "Advanced professional certification demonstrating expertise in specialized areas. Completed rigorous examination and practical assessments to validate skills."
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="inline-block mr-2">
            <GraduationCap size={32} className="inline text-primary" />
          </span>
          Education
        </h2>
        
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <h3 className="font-heading font-semibold text-xl text-primary">{edu.degree}</h3>
                      <p className="text-lg font-medium">{edu.field}</p>
                      <div className="flex items-center mt-2 text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="mb-2">
                        <h4 className="font-semibold text-lg">{edu.institution}</h4>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
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

export default Education;
