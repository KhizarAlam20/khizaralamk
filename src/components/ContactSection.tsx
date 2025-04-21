import React from "react";
import { Mail, PhoneCall, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full max-w-[700px] mx-auto">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-theme-primary text-center font-display leading-none mb-8">
        CONTACT
      </h2>
      
      <div className="p-6 border bg-theme-bg-card rounded-xl border-theme-highlight">
        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              className="w-full p-3 transition-all border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none text-theme-text font-body"
              placeholder="Your name"
            />
            <input
              type="email"
              className="w-full p-3 transition-all border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none text-theme-text font-body"
              placeholder="Your email"
            />
          </div>
          
          <input
            type="text"
            className="w-full p-3 transition-all border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none text-theme-text font-body"
            placeholder="Subject"
          />
          
          <textarea
            rows={4}
            className="w-full p-3 transition-all border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none text-theme-text font-body"
            placeholder="Your message"
          ></textarea>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 font-medium text-black transition-colors rounded-full bg-theme-primary font-body hover:bg-white"
            >
              SEND
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info + Social Links in one row */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
        <a href="mailto:hello@khizaralam.dev" className="flex items-center gap-2 transition-colors text-theme-gray hover:text-theme-primary">
          <Mail size={18} />
          <span className="font-body">khizaralam25@gmail.com</span>
        </a>
        
        <a href="tel:+1234567890" className="flex items-center gap-2 transition-colors text-theme-gray hover:text-theme-primary">
          <PhoneCall size={18} />
          <span className="font-body">+92311-XXXXXX</span>
        </a>
        
        <div className="flex items-center gap-2 text-theme-gray">
          <MapPin size={18} className="text-theme-primary" />
          <span className="font-body">Karachi, Pakistan</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-6 mb-10">
        <a href="https://www.github.com/KhizarAlam20" target="blank" className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-theme-bg-input hover:bg-theme-primary/10">
          <Github size={20} className="text-theme-primary" />
        </a>
        <a href="https://www.linkedin.com/in/khizar-alam-5718532a5/" target="blank" className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-theme-bg-input hover:bg-theme-primary/10">
          <Linkedin size={20} className="text-theme-primary" />
        </a>
        <a href="https://www.instagram.com/khizaralam09/" className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-theme-bg-input hover:bg-theme-primary/10">
          <Instagram size={20} className="text-theme-primary" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;