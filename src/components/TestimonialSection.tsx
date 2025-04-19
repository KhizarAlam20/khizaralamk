import React from "react";
import { Quote } from "lucide-react";

// Define a type for testimonial data
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
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
    <section className="w-full max-w-[700px] mx-auto px-4">
      {/* Heading */}
      <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-yellowText text-center font-display leading-none mb-8">
        TESTIMONIALS
      </h2>

      {/* Subtitle */}
      <p className="mb-10 text-center text-grayLight font-body max-w-[500px] mx-auto">
        What clients and collaborators have to say about working with me.
      </p>

      {/* Testimonials */}
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group relative bg-[#111111] p-6 sm:p-8 rounded-xl border border-[#282828] hover:border-yellowText transition-all duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1"
          >
            {/* Big transparent quote mark in background */}
            <div className="absolute top-4 right-4 text-[80px] text-yellowText/5 pointer-events-none select-none hidden sm:block">
              <Quote />
            </div>

            {/* Top Info */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center group-hover:bg-yellowText/10 transition-all duration-300 ease-in-out">
                <Quote size={24} className="text-yellowText" />
              </div>
              <div className="ml-4">
                <h4 className="text-[18px] font-display text-white">{testimonial.name}</h4>
                <p className="text-sm text-grayLight font-body">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-grayLight font-body italic text-[15px] leading-relaxed transition-all duration-500 group-hover:text-white ease-in-out">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
