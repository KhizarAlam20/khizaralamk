import React from "react";
import { Mail, PhoneCall, MapPin, Github, Linkedin, Instagram } from "lucide-react";

interface ContactCard {
  id: number;
  label: string;
  value: string;
  icon: React.ReactNode;
  link?: string;
}

const contactCards: ContactCard[] = [
  {
    id: 1,
    label: "Email",
    value: "khizaralam25@gmail.com",
    icon: <Mail size={20} />,
    link: "mailto:khizaralam25@gmail.com",
  },
  {
    id: 2,
    label: "Phone",
    value: "+92 311 0000000",
    icon: <PhoneCall size={20} />,
    link: "tel:+923110000000",
  },
  {
    id: 3,
    label: "Location",
    value: "Karachi, Pakistan",
    icon: <MapPin size={20} />,
  },
  {
    id: 4,
    label: "GitHub",
    value: "KhizarAlam20",
    icon: <Github size={20} />,
    link: "https://github.com/KhizarAlam20",
  },
  {
    id: 5,
    label: "LinkedIn",
    value: "khizar-alam",
    icon: <Linkedin size={20} />,
    link: "https://linkedin.com/in/khizar-alam-5718532a5",
  },
  {
    id: 6,
    label: "Instagram",
    value: "@khizaralam09",
    icon: <Instagram size={20} />,
    link: "https://instagram.com/khizaralam09",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section className="w-full max-w-[700px] mx-auto px-4 pb-10">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-theme-primary text-center font-display leading-none mb-6">
        CONTACT
      </h2>
      <p className="text-center text-theme-gray font-body mb-10 max-w-[500px] mx-auto">
        Feel free to reach out or connect with me through any of the platforms below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {contactCards.map((item) => (
          <a
            key={item.id}
            href={item.link || "#"}
            target={item.link?.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`group flex items-start gap-4 p-5 border rounded-xl transition-all duration-300 bg-theme-bg-card border-theme-highlight hover:border-theme-primary hover:shadow-md ${
              item.link ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-theme-bg-input group-hover:bg-theme-primary/10">
              <div className="text-theme-primary">{item.icon}</div>
            </div>
            <div>
              <p className="text-theme-text font-display text-base">{item.label}</p>
              <p className="text-theme-gray font-body text-sm">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
