import React from "react";
import { Quote } from "lucide-react";

// Define a type for testimonial data
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string; // Optional profile image
}

const TestimonialsSection: React.FC = () => {
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFusion",
      text: "Khizar transformed our concept into a stunning, functional product. His attention to detail and ability to blend excellent design with solid development really sets him apart.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "GrowthLabs",
      text: "Working with Khizar was a breeze. He understood our vision immediately and delivered a solution that exceeded our expectations. His technical skills combined with design sensibility resulted in a product our users love.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "CTO",
      company: "InnovateX",
      text: "Khizar's work speaks for itself. We needed someone who could handle both the frontend and backend aspects of our app, and he delivered brilliantly on both fronts. Would definitely work with him again.",
    },
  ];

  return (
    <section className="w-full max-w-[700px] mx-auto">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-yellowText text-center font-display leading-none mb-10">
        TESTIMONIALS
      </h2>
      
      <p className="mb-12 text-center text-grayLight font-body">
        What clients and collaborators have to say about working with me.
      </p>

      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center group-hover:bg-yellowText/10 transition-all duration-300">
                <Quote size={24} className="text-yellowText" />
              </div>
              <div className="ml-4">
                <h4 className="text-[18px] font-display text-white">{testimonial.name}</h4>
                <p className="text-sm text-grayLight font-body">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
            <p className="transition-all duration-300 text-grayLight font-body group-hover:text-white">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;