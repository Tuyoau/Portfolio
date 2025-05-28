import { useEffect } from "react";
import My from "../img/my2.png";
import git from "../img/github-icon.svg";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Profile() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="Proflie"  className="flex flex-col justify-center items-center min-h-screen w-full  text-white ">
      <div className=" flex flex-col  md:flex-row md:pt-20 pt-20 md:space-x-4 space-y-60 md:space-y-0 ">
        <div data-aos="fade-right" className="box1">
        
          <div className="typing-demo">I am TUYOAU</div>
         
          <div className="text-7xl mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
            Web Developer
          </div>
          <div className="text-2xl mt-4 text-wrap md:text-balance">
            I have 4 months of experience in graphics design and web
            development. Currently, I love to work on web application using
            technologies like React, Tailwind and Mongodb.
          </div>
          <div className="flex ">
            <button
              className="button text-violet-900"
              onClick={() => {
                window.open("/src/img/resume.png", "_blank");
              }}
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>
            <button
              className="git-btn"
              onClick={() => {
                window.open("https://github.com/Tuyoau", "_blank");
              }}
            >
              <img src={git} alt="GitHub" />
            </button>
          </div>
        </div>

        <div className="box2 flex justify-center items-center ">
          <img src={My} alt="Your Image" className="my-img" />
        </div>
      </div>
    </section>
  );
}
