import React from "react";
import { Mail, PhoneCall, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full max-w-[700px] mx-auto">
      <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-yellowText text-center font-display leading-none mb-8">
        CONTACT
      </h2>
      
      <p className="mb-8 text-center text-grayLight text-[15px] font-body">
        Have a project in mind? Let's bring your ideas to life.
      </p>

      <div className="bg-[#111111] p-6 rounded-2xl border border-[#282828]">
        {/* Contact Form */}
        <form>
          <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-body text-grayLight">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-body text-grayLight">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div className="mb-5">
            <label htmlFor="subject" className="block mb-1 text-sm font-body text-grayLight">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
              placeholder="Subject"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="message" className="block mb-1 text-sm font-body text-grayLight">
              MESSAGE
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 bg-[#181818] border border-[#282828] rounded-lg focus:border-yellowText focus:outline-none focus:ring-0 text-white font-body transition-all duration-300"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellowText text-black rounded-full font-body font-medium text-[14px] hover:bg-white transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
        <div className="bg-[#111111] p-4 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center mb-3 group-hover:bg-yellowText/10 transition-all duration-300">
            <Mail size={20} className="text-yellowText" />
          </div>
          <h4 className="mb-1 text-white font-display text-[16px]">Email</h4>
          <a href="mailto:hello@khizaralam.dev" className="transition-all duration-300 text-grayLight text-[14px] font-body group-hover:text-white">
            khizaralam25@gmail.com
          </a>
        </div>
        
        <div className="bg-[#111111] p-4 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center mb-3 group-hover:bg-yellowText/10 transition-all duration-300">
            <PhoneCall size={20} className="text-yellowText" />
          </div>
          <h4 className="mb-1 text-white font-display text-[16px]">Phone</h4>
          <a href="tel:+1234567890" className="transition-all duration-300 text-grayLight text-[14px] font-body group-hover:text-white">
            +92 311xxxxxxx
          </a>
        </div>
        
        <div className="bg-[#111111] p-4 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center mb-3 group-hover:bg-yellowText/10 transition-all duration-300">
            <MapPin size={20} className="text-yellowText" />
          </div>
          <h4 className="mb-1 text-white font-display text-[16px]">Location</h4>
          <p className="transition-all duration-300 text-grayLight text-[14px] font-body group-hover:text-white">
            Karachi, Pakistan
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-8 mb-10">
        <a href="#" className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-yellowText/10 transition-all duration-300 group">
          <Github size={24} className="text-yellowText" />
        </a>
        <a href="#" className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-yellowText/10 transition-all duration-300 group">
          <Linkedin size={24} className="text-yellowText" />
        </a>
        <a href="#" className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-yellowText/10 transition-all duration-300 group">
          <Twitter size={24} className="text-yellowText" />
        </a>
      </div>

    </section>
  );
};

export default ContactSection;
