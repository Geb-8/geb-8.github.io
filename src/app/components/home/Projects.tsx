'use client';

import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  schematic?: string;
  schematic2?: string;
  scope?: string;
  conclusion?: string;
  video?: string;
  tags: string[];
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    title: "Servo-Powered Ultrasonic Sonar Scanner",
    image: "/images/projects/sonar-main.webp",
    schematic: "/images/projects/sonar-schematic.webp",
    video: "/videos/sonar-demo.webm",
    tags: ["ATmega328P", "Embedded C", "PWM", "ADC", "Timers", "Ultrasonic", "Servo", "KiCad"],
    github: null,
    demo: null,
    description: `This project is an ultrasonic sonar scanner that I built to detect objects around it and show how close they are using light and sound.`,
    conclusion: `This project helped me tie together hardware design, low-level firmware, and real-time system behavior.`
  },

  {
    title: "Multistage BJT Audio Amplifier",
    image: "/images/projects/amplifier-main1.webp",
    schematic: "/images/projects/ltspice-1.png",
    schematic2: "/images/projects/ltspice-2.png",
    scope: "/images/projects/amplifier-scope1.webp",
    video: "/videos/amplifier-demo.webm",
    tags: ["BJT", "Analog Design", "LTspice", "Oscilloscope", "Amplifiers", "ECE 302"],
    github: null,
    demo: null,
    description: `In this project, I designed and built a two-stage BJT audio amplifier.`,
    conclusion: `This project strengthened my understanding of BJT biasing and multistage amplifier design.`
  },

  {
    title: "Altium 5V to 3.3V Linear Regulator",
    image: "/images/projects/regulator-main.webp",
    schematic: "/images/projects/regulator-schematic.webp",
    video: "/videos/regulator-demo.webm",
    tags: ["Altium", "PCB Design", "Power Electronics", "Voltage Regulation"],
    github: null,
    demo: null,
    description: `This project was created to practice Altium Designer and basic power electronics concepts.`,
    conclusion: `This project gave me hands-on experience with schematic capture and layout in Altium.`
  }
];

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section className="w-full mt-25 px-6" id="projects">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
          <SectionHeader title="Projects" subtitle="Featured" description="A selection of my recent engineering work." />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActive(project)}
                className="relative cursor-pointer border border-gray-700 bg-[#161B22]/70 rounded-2xl overflow-hidden flex flex-col group"
              >
                <div className="relative w-full aspect-[16/9] bg-black">
                  <Image src={project.image} alt={project.title} fill className="object-contain" />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm tracking-wider text-gray-200 uppercase">Click to View</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1117] max-w-3xl w-full rounded-2xl shadow-xl overflow-y-auto max-h-[85vh]"
            >
              <div className="relative">
                <Image src={active.image} alt={active.title} width={900} height={500} className="w-full object-contain bg-black" />
                <button className="absolute top-4 right-4 p-2 bg-black/60 rounded-full" onClick={() => setActive(null)}>
                  <X />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <h2 className="text-2xl font-bold">{active.title}</h2>
                <p className="text-gray-300 whitespace-pre-line">{active.description}</p>

                {active.video && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Demonstration Video</h3>
                    <video controls playsInline className="w-full rounded-xl border">
                      <source src={active.video} type="video/webm" />
                    </video>
                  </div>
                )}

                {active.conclusion && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Conclusion</h3>
                    <p className="text-gray-300">{active.conclusion}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {active.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm border border-gray-700 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
