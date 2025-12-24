"use client";
import Image from "next/image";
import React from "react";
import "./hero.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-4 border-gray-800 group relative w-40 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full transition-all duration-300"
        >
          <Image
            src="/images/hero/your-photo.png"
            alt="Gabriel Gebremedhn - profile photo"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </motion.div>

        {/* Text and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mt-6 gap-8 md:gap-6 max-w-3xl"
        >
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start">
            <span>Hi, I&apos;m</span>
            <h1 className="font-display tracking-normal text-5xl font-medium text-gray-50">
              Gabriel Gebremedhn
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SkillsSlider />
          </motion.div>

          <p className="text-xl tracking-wider text-center leading-relaxed">
            I&apos;m a third-year Electrical Engineering student at the University of Alberta with a strong interest in{" "}
            <span className="bg-blue-900/60 px-1">embedded systems</span> and hands-on engineering. I enjoy building projects where
            hardware and software come together — from circuit design and microcontroller programming to writing{" "}
            <span className="bg-purple-900/60 px-1">Embedded C</span> for reliable, efficient, and intuitive systems.
            <br /><br />
            My work includes AVR and Arduino projects using servos, ultrasonic sensors, LCDs, RGB LEDs, and timing-critical
            features like <span className="bg-green-900/60 px-1">PWM</span>, interrupts, and debouncing. I also design and analyze
            electronic circuits, build FPGA systems in VHDL, and work with ARM assembly when low-level control is required.
            I enjoy building systems that are practical, intuitive, and satisfying to use, and I bring creativity into every
            project I work on.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

const SkillsSlider = () => {
  return (
    <div className="flex gap-2 justify-center items-baseline">
      <div>I&apos;m an</div>
      <div className="slider">
        <div className="slides text-gray-300">
          <div>Electrical Engineering Student</div>
          <div>Aspiring Embedded Developer</div>
          <div>Hardware & Firmware Engineer</div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-2 text-sm text-gray-400">

      <div className="flex gap-6">
        <a
          href="https://github.com/Geb-8"
          target="_blank"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <BsGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/gabrielgebremedhn"
          target="_blank"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <BsLinkedin /> LinkedIn
        </a>

        <a
          href="mailto:hadgu@ualberta.ca"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <MdMailOutline /> Email
        </a>
      </div>

      <a
        href="/resume/Main-GabrielHagosElectricalResume1.docx.pdf"
        download
        className="text-sm px-6 py-2 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all"
      >
        Download Resume
      </a>

    </div>
  );
};
