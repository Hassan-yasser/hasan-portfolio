import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoFigma,
} from "react-icons/bi";
import { SiRedux, SiNextdotjs, SiFramer, SiFirebase } from "react-icons/si";

export const techStack = [
  { name: "React", icon: <BiLogoReact size={26} className="text-cyan-400" /> },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript size={26} className="text-blue-400" />,
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size={26} className="text-yellow-300" />,
  },
  { name: "HTML", icon: <BiLogoHtml5 size={26} className="text-orange-500" /> },
  { name: "CSS", icon: <BiLogoCss3 size={26} className="text-blue-500" /> },
  {
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss size={26} className="text-sky-400" />,
  },
  { name: "Next.js", icon: <SiNextdotjs size={26} className="text-white" /> },
  { name: "Redux", icon: <SiRedux size={26} className="text-purple-500" /> },
  {
    name: "Firebase",
    icon: <SiFirebase size={26} className="text-yellow-400" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={26} className="text-white" />,
  },
  { name: "Figma", icon: <BiLogoFigma size={26} className="text-pink-500" /> },
  { name: "GitHub", icon: <BiLogoGithub size={26} className="text-white" /> },
];
