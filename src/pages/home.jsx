import React from "react";
import Layout from "../components/layout";
import Proflie from "../pages/proflie"
import Skill from "../pages/skill";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
export default function Home() {
  return (
    <Layout>
      <div className="bg-black-to-purple min-h-screen flex items-center justify-center sm:w-full">
      <div className="container">
        <Proflie/>
      <Skill />
      <Blog/>
      <Contact/>
      </div>
      </div>
     
      
        </Layout>
  );
}
