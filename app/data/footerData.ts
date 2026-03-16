import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const companyInfo = {
  name: "Creative Group",
  tagline: "Construction & Builders",
  description:
    "Creative Group is a trusted construction company based in Baramati with over 12 years of experience delivering quality residential and commercial projects. Founded by Sandip Jaypatre, we focus on strong construction, modern design, and customer satisfaction.",

  owner: "Sandip Jaypatre",
  established: 2013,
  experience: "12+ Years",

  phone: "9770747074",
  email: "creativegoup5855@gmail.com",

  address: {
    line1: "Flat No. 102 Ajinkya Icon",
    line2: "Tandulwadi Road, Satav Chowk",
    line3: "Baramati, Maharashtra, India",
  },
};

export const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ],

  services: [
    { name: "Residential Construction", href: "#services" },
    { name: "Commercial Construction", href: "#services" },
    { name: "Renovation", href: "#services" },
    { name: "Turnkey Projects", href: "#services" },
  ],

  resources: [
    { name: "Project Gallery", href: "#projects" },
    { name: "Drone Showcase", href: "#drone" },
    { name: "FAQs", href: "#faq" },
  ],
};

export const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/creative.group.baramati?mibextid=ZbWKwL&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/creative_group_5855_official/",
    label: "Instagram",
  },

  {
    icon: Youtube,
    href: "https://www.youtube.com/@Creative_Groupp",
    label: "YouTube",
  },
];

export const certifications = [
  "12+ Years Construction Experience",
  "Trusted Local Builder - Baramati",
  "Quality Construction Materials",
  "Residential & Commercial Projects",
];