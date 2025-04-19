import React from "react";
import { Mail, PhoneCall, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full max-w-[700px] mx-auto">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-yellowText text-center font-display leading-none mb-10">
        CONTACT
      </h2>
      
      <p className="mb-12 text-center text-grayLight font-body">
        Have a project in mind? Let's bring your ideas to life.
      </p>

      <div className="bg-[#111111] p-8 rounded-2xl border border-[#282828]">
        {/* Contact Form */}
        <form>
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-body text-grayLight">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-body text-grayLight">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-body text-grayLight">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-4 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
              placeholder="Subject"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-body text-grayLight">
              MESSAGE
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-4 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-yellowText text-black rounded-full font-body font-medium text-[16px] hover:bg-white transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-3">
        <div className="bg-[#111111] p-6 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center mb-4 group-hover:bg-yellowText/10 transition-all duration-300">
            <Mail size={24} className="text-yellowText" />
          </div>
          <h4 className="mb-2 text-white font-display">Email</h4>
          <a href="mailto:hello@khizaralam.dev" className="transition-all duration-300 text-grayLight font-body group-hover:text-white">
            hello@khizaralam.dev
          </a>
        </div>
        
        <div className="bg-[#111111] p-6 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center mb-4 group-hover:bg-yellowText/10 transition-all duration-300">
            <PhoneCall size={24} className="text-yellowText" />
          </div>
          <h4 className="mb-2 text-white font-display">Phone</h4>
          <a href="tel:+1234567890" className="transition-all duration-300 text-grayLight font-body group-hover:text-white">
            +1 (234) 567-890
          </a>
        </div>
        
        <div className="bg-[#111111] p-6 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center mb-4 group-hover:bg-yellowText/10 transition-all duration-300">
            <MapPin size={24} className="text-yellowText" />
          </div>
          <h4 className="mb-2 text-white font-display">Location</h4>
          <p className="transition-all duration-300 text-grayLight font-body group-hover:text-white">
            New York, USA
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-12">
        <a href="#" className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-yellowText/10 transition-all duration-300 group">
          <Github size={22} className="text-yellowText" />
        </a>
        <a href="#" className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-yellowText/10 transition-all duration-300 group">
          <Linkedin size={22} className="text-yellowText" />
        </a>
        <a href="#" className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-yellowText/10 transition-all duration-300 group">
          <Twitter size={22} className="text-yellowText" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;