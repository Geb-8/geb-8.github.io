"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const experiences = [
  {
    club: "AlbertaHeart",
    location: "Edmonton, Alberta",
    role: "Electrical & Embedded Systems Member",
    dates: "Sep 2025 – Present",
    image: "/images/clubs/albertaheart.webp",
    description: [
      "Contribute to the design and development of a student-built Total Artificial Heart by creating and refining analog and digital control circuits.",
      "Perform bench-level testing and iterative debugging using oscilloscopes, measurement equipment, and simulation tools to verify system behavior.",
      "Support the implementation of feedback control techniques to improve system accuracy, responsiveness, and long-term reliability."
    ],
  },
  {
    club: "AlbertaSat",
    location: "Edmonton, Alberta",
    role: "Power Systems Team Member",
    dates: "Jan 2025 – Sep 2025",
    image: "/images/clubs/albertasat.webp",
    description: [
      "Assisted in the design of solar panel circuitry in Altium Designer as part of the satellite power subsystem.",
      "Tested temperature and deployment sensors for the Electrical Power System to ensure reliable operation under environmental conditions.",
      "Contributed to the fabrication and testing of Hyperion solar panels for the Ex-Alta 3 CubeSat mission."
    ],
  },
  {
    club: "University of Alberta Solar Car",
    location: "Edmonton, Alberta",
    role: "Electrical Subsystem Team Member",
    dates: "Sep 2024 – Sep 2025",
    image: "/images/clubs/solarcar.webp",
    description: [
      "Conducted in-depth research on power electronics including battery management systems, power architecture, MPPT, and charging infrastructure.",
      "Evaluated technical specifications and industry standards to support safe and efficient component selection.",
      "Contributed to circuit design, subsystem integration, and performance modeling to improve overall vehicle power delivery."
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="w-full mt-32 px-6">
      <div className="max-w-7xl mx-auto space-y-10">

        <SectionHeader
          title="More About Me"
          subtitle="Experience"
          description="Student teams, technical projects, and hands-on engineering work"
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-center border border-gray-700 bg-[#161B22]/70 rounded-2xl p-6"
          >
            <Image
              src={exp.image}
              alt={exp.club}
              width={260}
              height={180}
              className="rounded-xl object-cover"
            />

            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold text-gray-50">{exp.club}</h3>

              <p className="text-sm text-gray-400">
                {exp.role} — {exp.location}
              </p>

              <p className="text-sm text-gray-500 italic">{exp.dates}</p>

              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default About;
