'use client';

import React, { useState } from "react";
import { Github, X } from "lucide-react";
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
    video: "https://www.youtube.com/watch?v=ib-npuFnsrQ",
    tags: ["ATmega328P", "Embedded C", "PWM", "ADC", "Timers", "Ultrasonic", "Servo", "KiCad"],
    github: null,
    demo: null,
    description: `This project is an ultrasonic sonar scanner that I built to detect objects around it and show how close they are using light and sound.

A servo motor slowly rotates the ultrasonic sensor across a 180° range. As it turns, the ATmega328P reads distance values from the sensor and decides what feedback to give. Objects between 30–50 cm turn the LED green with a low buzzer tone. Objects between 15–30 cm turn it yellow with a higher tone. Anything closer than 15 cm turns the LED red and produces the highest buzzer frequency. If nothing is detected, the LED stays white and the buzzer remains silent.

The system was built on two breadboards and powered by a regulated 5 V supply capable of about 0.6 A. I programmed the microcontroller using MPLAB X and AVR-GCC. The code directly controls GPIO pins, timers, PWM for the servo, the LCD interface, and timing for the ultrasonic sensor.`,
    conclusion: `This project helped me tie together hardware design, low-level firmware, and real-time system behavior.`
  },

  {
    title: "Multistage BJT Audio Amplifier",
    image: "/images/projects/amplifier-main1.webp",
    schematic: "/images/projects/ltspice-1.png",
    schematic2: "/images/projects/ltspice-2.png",
    scope: "/images/projects/amplifier-scope1.webp",
    video: "https://www.youtube.com/watch?v=MMFi3pUHYkU",
    tags: ["BJT", "Analog Design", "LTspice", "Oscilloscope", "Amplifiers", "ECE 302"],
    github: null,
    demo: null,
    description: `In this project, I designed and built a two-stage BJT audio amplifier.`,
    conclusion: `This project strengthened my understanding of BJT biasing and multistage amplifier design.`
  },

  {
    title: "Digital Combination Lock System",
    image: "/images/projects/lock-main.webp",
    schematic: "/images/projects/lock-schematic.webp",
    tags: ["ATtiny2313A", "Embedded C", "State Machine", "GPIO", "KiCad", "MPLAB X"],
    github: null,
    demo: null,
    description: `This project is a fully functional digital combination lock built using an ATtiny2313A.`
  },

  {
    title: "Joystick-to-PC Data Streaming System",
    image: "/images/projects/UART1.png",
    schematic: "/images/projects/uart-schematic.webp",
    tags: ["ATmega328P", "ADC", "UART", "Embedded C", "LCD", "MPLAB X", "KiCad"],
    github: null,
    demo: null,
    description: `This project focuses on building a joystick-to-PC communication system using UART.`
  },

  {
    title: "Altium 5V to 3.3V Linear Regulator",
    image: "/images/projects/regulator-main.webp",
    schematic: "/images/projects/regulator-schematic.webp",
    video: "https://www.youtube.com/watch?v=NPdDLb_HD48",
    tags: ["Altium", "PCB Design", "Power Electronics", "Voltage Regulation"],
    github: null,
    demo: null,
    description: `This project was a simple design created to learn Altium Designer.`,
    conclusion: `This project gave me hands-on experience with Altium Designer.`
  }
];

const getYouTubeEmbedUrl = (url: string) => {
  if (url.includes("youtu.be")) {
    return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
  }
  return `https://www.youtube.com/embed/${new URL(url).searchParams.get("v")}`;
};

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section className="w-full mt-25 px-6" id="projects">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 items-center">
          <SectionHeader title="Projects" subtitle="Featured" description="A selection of my recent engineering work." />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActive(project)}
                className="cursor-pointer border border-gray-700 bg-[#161B22]/70 rounded-2xl overflow-hidden"
              >
                <div className="relative w-full aspect-[16/9] bg-black">
                  <Image src={project.image} alt={project.title} fill className="object-contain" />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1117] max-w-3xl w-full rounded-2xl overflow-y-auto max-h-[85vh]"
            >
              <div className="relative">
                <Image src={active.image} alt={active.title} width={900} height={500} className="w-full bg-black object-contain" />
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
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border">
                      <iframe
                        src={getYouTubeEmbedUrl(active.video)}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                )}

                {active.conclusion && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Conclusion</h3>
                    <p className="text-gray-300">{active.conclusion}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
