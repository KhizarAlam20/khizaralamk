import React from "react";
import { Mail, PhoneCall, MapPin, Github, Linkedin, Twitter } from "lucide-react";
// import { useTheme } from "./Context/ThemeContext";

const ContactSection: React.FC = () => {
  // const { theme } = useTheme();

  return (
    <section className="w-full max-w-[700px] mx-auto">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-theme-primary text-center font-display leading-none mb-10">
        CONTACT
      </h2>
      
      <p className="mb-12 text-center text-theme-gray font-body">
        Have a project in mind? Let's bring your ideas to life.
      </p>

      <div className="p-8 border bg-theme-bg-card rounded-2xl border-theme-highlight">
        {/* Contact Form */}
        <form>
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-body text-theme-gray">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 transition-all duration-300 border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none focus:ring-0 text-theme-text font-body"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-body text-theme-gray">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 transition-all duration-300 border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none focus:ring-0 text-theme-text font-body"
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-body text-theme-gray">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-4 transition-all duration-300 border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none focus:ring-0 text-theme-text font-body"
              placeholder="Subject"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-body text-theme-gray">
              MESSAGE
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-4 transition-all duration-300 border rounded-lg bg-theme-bg-input border-theme-highlight focus:border-theme-primary focus:outline-none focus:ring-0 text-theme-text font-body"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-theme-primary text-black rounded-full font-body font-medium text-[16px] hover:bg-white transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-3">
        <div className="flex flex-col items-center p-6 text-center transition-all duration-300 border bg-theme-bg-card rounded-2xl border-theme-highlight hover:border-theme-primary group">
          <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-full bg-theme-bg-input group-hover:bg-theme-primary/10">
            <Mail size={24} className="text-theme-primary" />
          </div>
          <h4 className="mb-2 text-theme-text font-display">Email</h4>
          <a href="mailto:hello@khizaralam.dev" className="transition-all duration-300 text-theme-gray font-body group-hover:text-theme-text">
            hello@khizaralam.dev
          </a>
        </div>
        
        <div className="flex flex-col items-center p-6 text-center transition-all duration-300 border bg-theme-bg-card rounded-2xl border-theme-highlight hover:border-theme-primary group">
          <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-full bg-theme-bg-input group-hover:bg-theme-primary/10">
            <PhoneCall size={24} className="text-theme-primary" />
          </div>
          <h4 className="mb-2 text-theme-text font-display">Phone</h4>
          <a href="tel:+1234567890" className="transition-all duration-300 text-theme-gray font-body group-hover:text-theme-text">
            +1 (234) 567-890
          </a>
        </div>
        
        <div className="flex flex-col items-center p-6 text-center transition-all duration-300 border bg-theme-bg-card rounded-2xl border-theme-highlight hover:border-theme-primary group">
          <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-full bg-theme-bg-input group-hover:bg-theme-primary/10">
            <MapPin size={24} className="text-theme-primary" />
          </div>
          <h4 className="mb-2 text-theme-text font-display">Location</h4>
          <p className="transition-all duration-300 text-theme-gray font-body group-hover:text-theme-text">
            New York, USA
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-12 mb-12">
        <a href="#" className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full bg-theme-bg-input hover:bg-theme-primary/10 group">
          <Github size={22} className="text-theme-primary" />
        </a>
        <a href="#" className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full bg-theme-bg-input hover:bg-theme-primary/10 group">
          <Linkedin size={22} className="text-theme-primary" />
        </a>
        <a href="#" className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full bg-theme-bg-input hover:bg-theme-primary/10 group">
          <Twitter size={22} className="text-theme-primary" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;