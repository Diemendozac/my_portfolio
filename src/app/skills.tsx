"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  DocumentTextIcon,
  ServerIcon,
  CloudIcon
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating miltiplatformz and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: ServerIcon,
    title: "Backend Development",
    children:
      "I build robust backend systems using Java, ensuring your applications run securely, scalably, and efficiently. This not only provides seamless integration with the frontend, but also enhances overall performance and reliability.",
  },  
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: CloudIcon,
    title: "DevOps",
    children:
      "Operational excellence is paramount. I implement robust DevOps practices with a deep understanding of AWS and GCloud, ensuring streamlined workflows, seamless deployments, and scalable, reliable infrastructure.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
