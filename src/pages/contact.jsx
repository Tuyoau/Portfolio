import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Contact() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      id="Contact"
      data-aos="fade-up"
      className="flex flex-col justify-center items-center min-h-screen w-full text-white aos-init aos-animate"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-6xl">Contact</div>
      </div>

      <div className="flex justify-center mt-10 mb-40">
        <a
          href="mailto:tuyoau.tuy@mail.pbru.ac.th"
          className="w-96 h-60 bg-black flex flex-col justify-center items-center btn-mail"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-white"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
          </svg>
          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold">Mail</h3>
            <h2 className="text-lg">tuyoau.tuy@mail.pbru.ac.th</h2>
          </div>
        </a>
      </div>
    </section>
  );
}
