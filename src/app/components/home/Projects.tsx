'use client';
import React, { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
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
    description: `This project is an ultrasonic sonar scanner that I built to detect objects around it and show how close they are using light and sound.

A servo motor slowly rotates the ultrasonic sensor across a 180° range. As it turns, the ATmega328P reads distance values from the sensor and decides what feedback to give. Objects between 30–50 cm turn the LED green with a low buzzer tone. Objects between 15–30 cm turn it yellow with a higher tone. Anything closer than 15 cm turns the LED red and produces the highest buzzer frequency. If nothing is detected, the LED stays white and the buzzer remains silent.

The system was built on two breadboards and powered by a regulated 5 V supply capable of about 0.6 A. I programmed the microcontroller using MPLAB X and AVR-GCC. The code directly controls GPIO pins, timers, PWM for the servo, the LCD interface, and timing for the ultrasonic sensor.

I designed the full hardware circuit in KiCad. The SNAP programmer connects to the ATmega328P through SPI. An external crystal with capacitors provides an accurate clock. The rest of the circuit includes the LCD, RGB LED with current-limiting resistors, a piezo buzzer, the ultrasonic module, and the servo motor.`,
    conclusion: `This project helped me tie together hardware design, low-level firmware, and real-time system behavior. It strengthened my understanding of microcontroller peripherals and how different subsystems interact in a complete embedded system.`,
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
    description: `In this project, I designed and built a two-stage BJT audio amplifier. The goal was to get a gain of about 11 V/V at 2 kHz, keep the input resistance above 10 kΩ, and produce at least 10 V peak-to-peak without clipping.

Before building the amplifier, I used LTspice to model the power setup and the amplifier. The first LTspice schematic shows the transformer and rectifier setup used to generate the ±10 V dual-rail supply. The second LTspice schematic shows the full two-stage amplifier design.

After simulation, I built the full circuit neatly on a single breadboard. I then tested the amplifier on the oscilloscope to verify the gain and make sure the output waveform stayed clean. The function generator knob was used to change the input frequency, which directly changed the pitch of the output sound.

Finally, I connected the amplifier to a 1200:8 Ω transformer and an 8 Ω speaker. The amplifier produced a clear audio tone.`,
    conclusion: `This project strengthened my understanding of BJT biasing, multistage amplifier design, and validating simulations with real measurements.`,
  },

  {
    title: "Altium 5V to 3.3V Linear Regulator",
    image: "/images/projects/regulator-main.webp",
    schematic: "/images/projects/regulator-schematic.webp",
    video: "/videos/regulator-demo.webm",
    tags: ["Altium", "PCB Design", "Power Electronics", "Voltage Regulation"],
    github: null,
    demo: null,
    description: `This project was a simple design I created to learn how to use Altium Designer and practice basic power electronics concepts. 
    
I built a 5V to 3.3V linear voltage regulator using a small set of randomly selected components from a parts list. The circuit includes two capacitors for input and output filtering, one regulator IC, and two supporting resistors. The goal was not to optimize the design, but to understand schematic capture, component selection, net labeling, and layout workflow inside Altium.

I designed the full schematic in Altium, generated the project files, and verified the connections before exporting the final design. This project helped me become more comfortable navigating Altium and understanding how real power regulation circuits are structured.`,
    conclusion: `This project gave me hands-on experience with Altium Designer and reinforced my understanding of how simple voltage regulation circuits are built and documented.`,
  }
];

...

{active.video && (
  <div>
    <h3 className="text-lg font-semibold mb-2">Demonstration Video</h3>
    <video controls playsInline className="w-full rounded-xl border">
      <source src={active.video} type="video/webm" />
    </video>
  </div>
)}
