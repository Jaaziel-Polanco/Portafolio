import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
  MessageSquare
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "Jaaziel Sebastian P...",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/jaaziel-sebasti%C3%A1n-polanco-martinez-63a851288/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@Jaaziel_Polanco",
    icon: Instagram,
    url: "https://www.instagram.com/Jaaziel_Polanco/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "YouTube",
    displayName: "Youtube",
    subText: "@InnoPulse",
    icon: Youtube,
    url: "",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#CC0000]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Jaaziel-Polanco",
    icon: Github,
    url: "https://github.com/Jaaziel-Polanco",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "Chat with me",
    icon: MessageSquare,
    url: "https://wa.me/8299424252",
    color: "#25D366",
    gradient: "from-[#25D366] to-[#128C7E]"
  }
];

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between p-4 rounded-2xl text-white shadow-lg bg-gradient-to-r ${link.gradient}`}
          style={{ backgroundColor: link.color }}
        >
          <div>
            <h3 className="text-lg font-semibold">{link.displayName}</h3>
            <p className="text-sm">{link.subText}</p>
          </div>
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
