import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { FaGithub } from "react-icons/fa6";

export default function About() {
  return (
    <div
      id="about"
      className="px-20 pt-16 flex h-screen flex-wrap items-start justify-between dark:text-white dark:bg-black"
    >
      <div>
        <h1 className=" text-4xl font-bold my-4">About me.</h1>
        <p className="py-2 w-[600px] leading-7 text-gray-700 dark:text-white">
          Hello! I'm <strong>Sonu Sahu</strong>, and I'm passionate about making
          a difference in people's lives through my creative projects. My
          fascination with programming began during my early college days. As I
          delved deeper into the world of technology, I discovered the power of
          web development using HTML, CSS, and JS to create websites.
        </p>
        <p className="py-2 w-[600px] leading-7 text-gray-700 dark:text-white">
          My learning journey started with FreeCodeCamp, where I found my love
          for coding. Over time, I honed my skills and embarked on various
          personal projects. Today, I have had the opportunity to collaborate
          with multiple clients, building websites from the ground up and
          revamping outdated ones.
        </p>
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <ul className="flex items-center justify-start flex-wrap w-[500px] gap-7">
          <li className="flex items-center justify-start gap-3">
            <AiFillHtml5 size={25} className=" text-red-400" />
            HTML
          </li>
          <li className="flex items-center justify-start gap-1">
            <DiCss3 size={25} className=" text-blue-600" />
            CSS
          </li>
          <li className="flex items-center justify-start gap-1">
            <BiLogoJavascript size={25} className=" text-yellow-600" />
            Javascript
          </li>
          <li className="flex items-center justify-start gap-1">
            <BiLogoTypescript size={25} className=" text-blue-500" />
            Typescript
          </li>
          <li className="flex items-center justify-start gap-1">
            <BiLogoReact size={25} className=" text-blue-500" />
            React js
          </li>
          {/* <li className="flex items-center justify-start gap-1">
            <TbBrandNextjs size={25} />
            Next js
          </li>
          <li className="flex items-center justify-start gap-1">
            <BiLogoNodejs size={25} className=" text-green-800" />
            Node js
          </li>
          <li className="flex items-center justify-start gap-1">
            <BiLogoReact size={25} className=" text-blue-500" />
            React Native
          </li> */}
          <li className="flex items-center justify-start gap-1">
            <FaGithub size={20} />
            Git & GitHub
          </li>
        </ul>
      </div>
      <div>
        <img src={"/about.jpg"} className="w-[450px] h-[580px] rounded" />
      </div>
    </div>
  );
}
