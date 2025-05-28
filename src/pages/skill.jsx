import React, { useEffect } from "react";
import css from "../img/css.svg";
import html from "../img/html.svg";
import js from "../img/javascript.svg";
import react from "../img/react.svg";
import tw from "../img/tailwind-css.svg";
import bootstrap from "../img/bootstrap.svg";
import figma from "../img/figma.svg";
import php from "../img/php.svg";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Skill() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section id="Skill" data-aos="fade-up" className="flex flex-col justify-center items-center min-h-screen w-full  text-white  " >
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-6xl">My Skills</div>
        <div className="text-3xl py-10">
          Here's a list of technologies I've worked with
        </div>
      </div>

      <div className="flex flex-wrap justify-center ">
        <div className="skill-inner filter: grayscale hover:filter-none">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none "
              src={html}
              alt="HTML"
            />
            <div className="skill-content ">HTML</div>
          </div>
        </div>
        <div className="skill-inner">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none"
              src={css}
              alt="CSS"
            />
            <div className="skill-content ">CSS</div>
          </div>
        </div>
        <div className="skill-inner">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none"
              src={js}
              alt="JavaScript"
            />
            <div className="skill-content ">JAVASCRIP</div>
          </div>
        </div>
        <div className="skill-inner">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none"
              src={react}
              alt="React"
            />
            <div className="skill-content ">React JS</div>
          </div>
        </div>

        <div className="skill-inner">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none"
              src={tw}
              alt="Tailwind CSS"
            />
            <div className="skill-content ">tailwindcss</div>
          </div>
        </div>
        <div className="skill-inner">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none"
              src={bootstrap}
              alt="Bootstrap"
            />
            <div className="skill-content ">Boostrap</div>
          </div>
        </div>

        <div className="skill-inner">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none"
              src={figma}
              alt="figma"
            />
            <div className="skill-content ">Figma</div>
          </div>
        </div>

        <div className="skill-inner">
          <div className="mx-5 my-5">
            <img
              className="skill-icon focus:scale-110 hover:scale-110 filter: grayscale hover:filter-none"
              src={php}
              alt="figma"
            />
            <div className="skill-content ">PHP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
