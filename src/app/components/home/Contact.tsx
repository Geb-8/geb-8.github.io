"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full mt-25 px-6" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 justify-center items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Contact Me"
            subtitle="Preferred Method: Email"
            description="The best way to reach me is via email. I also welcome phone calls if needed."
          />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-3xl border border-gray-700 bg-[#161B22]/70 backdrop-blur-3xl p-8 rounded-2xl text-gray-200 space-y-6"
        >
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-400">Email (preferred)</p>
              <a
                href="mailto:hadgu@ualberta.ca"
                className="text-lg hover:text-blue-500 transition-colors"
              >
                hadgu@ualberta.ca
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-400">Phone (Canada)</p>
              <a
                href="tel:+1 (825)-419-9287"
                className="text-lg hover:text-blue-500 transition-colors"
              >
                +1 (825)-419-9287
              </a>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-400 pt-4 border-t border-gray-700">
            Email is the preferred method of communication. I typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
