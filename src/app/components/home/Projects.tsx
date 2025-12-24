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
    video: "/videos/sonar-demo.mp4",
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
    video: "/videos/amplifier-demo.mp4",
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
    title: "Digital Combination Lock System",
    image: "/images/projects/lock-main.webp",
    schematic: "/images/projects/lock-schematic.webp",
    tags: ["ATtiny2313A", "Embedded C", "State Machine", "GPIO", "KiCad", "MPLAB X"],
    github: null,
    demo: null,
    description: `This project is a fully functional digital combination lock built using an ATtiny2313A microcontroller. The system is based on a clear state-machine design that controls access using push buttons and provides feedback with an RGB LED and a passive buzzer.

When the system powers on, it starts in a locked state, shown by a red LED. Each time a button is pressed, the buzzer gives a short beep and the LED turns white while the button is held. After the full sequence is entered, the microcontroller checks the input against a pre-programmed password. If the code is correct, the system switches to an unlocked state and the LED turns green.

To maintain security, once the system is unlocked, any additional button press immediately returns it to the locked state, forcing the correct code to be entered again. This prevents the lock from remaining open after access has been granted.

Before building the hardware, I designed the full circuit in KiCad, shown in the schematic image. The ATtiny2313A is powered with 5 V and programmed using a SNAP programmer. The circuit includes five push buttons, an RGB LED with current-limiting resistors, and a passive buzzer. The buttons are connected to the microcontroller with internal pull-up resistors enabled, and the firmware was written in Embedded C using MPLAB X with direct register control.

The completed circuit was assembled on a breadboard, tested, and demonstrated to the TA as a working secure lock system.`,
  },

  {
    title: "Joystick-to-PC Data Streaming System",
    image: "/images/projects/UART1.png",
    schematic: "/images/projects/uart-schematic.webp",
    tags: ["ATmega328P", "ADC", "UART", "Embedded C", "LCD", "MPLAB X", "KiCad"],
    github: null,
    demo: null,
    description: `This project focuses on building a complete joystick-to-PC communication system using the ATmega328P microcontroller. The system reads the joystick’s two analog axes (VRx and VRy) using the internal ADC and reads the built-in push button as a digital input. These values are continuously displayed on an LCD screen so the user can see the joystick’s position and button state in real time.

In the second part of the project, the joystick data is streamed directly to a computer for live monitoring. The microcontroller formats the data and transmits it using UART configured at 9600 baud, 8 data bits, no parity, and one stop bit (8N1). A USB-to-TTL interface converts the serial signals to USB so the data can be viewed on a PC using terminal software such as Tera Term.

Before building the hardware, the full circuit was designed in KiCad. The schematic shows the SNAP programmer connections to the ATmega328P, the external crystal oscillator with capacitors for stable clocking, and the full LCD interface. The LCD’s DB7–DB4 lines connect to PD7–PD4, while RS, R/W, and E connect to PB0–PB2. A potentiometer on the V0 pin controls display contrast.

The joystick is powered by 5 V and ground, with VRx, VRy, and the switch connected to PC4, PC5, and PD2. The UART lines connect the microcontroller’s TX and RX to the USB-TTL adapter for communication with the PC. Together, this project demonstrates how embedded hardware, communication protocols, and firmware work together to collect sensor data and deliver it to external systems in a clean, structured way.`,
  },
  {
    title: "Altium 5V to 3.3V Linear Regulator",
    image: "/images/projects/regulator-main.webp",
    schematic: "/images/projects/regulator-schematic.webp",
    video: "/videos/regulator-demo.mp4",
    tags: ["Altium", "PCB Design", "Power Electronics", "Voltage Regulation"],
    github: null,
    demo: null,
  
    description: `This project was a simple design I created to learn how to use Altium Designer and practice basic power electronics concepts. 
  
  I built a 5V to 3.3V linear voltage regulator using a small set of randomly selected components from a parts list. The circuit includes two capacitors for input and output filtering, one regulator IC, and two supporting resistors. The goal was not to optimize the design, but to understand schematic capture, component selection, net labeling, and layout workflow inside Altium.
  
  I designed the full schematic in Altium, generated the project files, and verified the connections before exporting the final design. This project helped me become more comfortable navigating Altium and understanding how real power regulation circuits are structured.`,
  
    conclusion: `This project gave me hands-on experience with Altium Designer and reinforced my understanding of how simple voltage regulation circuits are built and documented.`,
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm tracking-wider text-gray-200 uppercase">
                      Click to View
                    </span>
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
        {active && (
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
                <Image src={active.image} alt={active.title} width={900} height={500} className="w-full h-auto max-h-[70vh] object-contain bg-black" />
                <button className="absolute top-4 right-4 p-2 bg-black/60 rounded-full" onClick={() => setActive(null)}><X /></button>
              </div>

              <div className="p-6 space-y-5">
                <h2 className="text-2xl font-bold">{active.title}</h2>
                <p className="text-gray-300 whitespace-pre-line">{active.description}</p>

                {active.schematic && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">System Schematic</h3>
                    <Image src={active.schematic} alt="System schematic" width={900} height={500} className="rounded-xl border" />
                  </div>
                )}

                {active.schematic2 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">LTspice — Two-Stage Amplifier</h3>
                    <Image src={active.schematic2} alt="LTspice amplifier schematic" width={900} height={500} className="rounded-xl border" />
                  </div>
                )}

                {active.scope && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Oscilloscope Measurement</h3>
                    <Image src={active.scope} alt="Oscilloscope screenshot" width={900} height={500} className="rounded-xl border" />
                  </div>
                )}

                {active.conclusion && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Conclusion</h3>
                    <p className="text-gray-300 whitespace-pre-line">{active.conclusion}</p>
                  </div>
                )}

                {active.video && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Demonstration Video</h3>
                    <video controls className="w-full rounded-xl border" src={active.video} />
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
