"use client";
import { Code2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { GoMoveToTop } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";

const handleMoveTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="w-full mt-35 bg-[#0D1117] p-4 shadow-[0_-10px_30px_rgba(13,17,23,0.45)] pb-14 pt-14">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 justify-center items-center px-6 mb-3">

        <button
          onClick={handleMoveTop}
          title="Go to top"
          type="button"
          className="flex items-center gap-2 hover:scale-105 text-gray-500 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:to-gray-900 px-2 py-1 rounded-lg"
        >
          <GoMoveToTop size={24} />
        </button>

        <p className="text-gray-500 text-center italic max-w-2xl">
          Colossians 3:23
        </p>

        <div className="mt-4 w-full flex flex-col-reverse md:flex-row gap-8 justify-between items-center">

          <div className="flex gap-1 flex-col items-center md:items-start justify-center">
            <h3 className="text-xl font-medium font-display flex gap-1 items-center">
              <Code2Icon /> Gabriel Gebremedhn
            </h3>
            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} — Built with care and purpose.
            </p>
          </div>

          <div>
            <ul className="flex gap-3 items-center justify-center">
              <li>
                <Link
                  href="https://github.com/Geb-8"
                  title="GitHub"
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-200 transition px-3 py-2 rounded-lg"
                >
                  <BsGithub /> GitHub
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/in/gabrielgebremedhn"
                  title="LinkedIn"
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-200 transition px-3 py-2 rounded-lg"
                >
                  <FiLinkedin /> LinkedIn
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:hadgu@ualberta.ca"
                  title="Email"
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-200 transition px-3 py-2 rounded-lg"
                >
                  <MdMailOutline /> Email
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
