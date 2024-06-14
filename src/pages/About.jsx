/*
    File: About.jsx
    Author: Ed Park
    Copyright: 2023 - Ed Park https://edpark.space
    Version: 1.0
*/

import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
  return (
    <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
      <h1 className="text-center max-w-[18em]">About Me</h1>
      <img
        className="max-w-[300px] md:w-[300px] rounded-full" //profile-border
        src="/assets/images/profile-pic-2.png"
        alt="Profile of Ed Park"
      />
      <p className="text-justify">
        Hello! My name is Jagamohan Panda, and I currently reside and work in
        Kolkata, West Bengal. My primary focus is on constructing and enhancing
        websites for businesses, helping them establish a robust digital
        presence.
      </p>
      <p className="text-justify">
        I am a Full Stack Developer with a passion for crafting dynamic and
        user-centric web applications. I hold a Bachelor's degree from Utkal
        University. Currently, I am working as a Software Development Engineer -
        I at Dot Product Solutions LLP, where I have contributed to the growth
        of various AI-based and full-stack applications, resulting in
        significant improvements in user engagement and task management
        efficiency.
      </p>
      <p className="text-justify">
        Previously, I worked as an Associate Software Engineer at Indus Net
        Technologies Pvt. Ltd., where I successfully restructured, modularized,
        and modernized outdated code bases, resulting in cost reduction and a
        15% improvement in functionality.
      </p>
      <p className="text-justify">
        I also gained valuable experience as a MERN Stack Trainee at Masai
        School, serving as a dedicated Student Coordinator. In this role, I
        provided support to fellow students, assisted with assignments and
        coding doubts, and actively participated in team-based development
        projects.
      </p>
      <p className="text-justify">
        I am proficient in a wide range of technologies, including React.js,
        Node.js, and PostgreSQL. I have experience in restructuring and
        modernizing code bases for improved functionality and cost efficiency. I
        excel at collaborating with cross-functional teams and managing
        end-to-end stages of the systems development lifecycle. My strong
        problem-solving skills and track record of designing reusable code
        components contribute to my commitment to delivering high-quality
        solutions that enhance user experiences.
      </p>
      <p className="text-justify">
        My journey in web development is driven by the desire to make a
        meaningful impact on businesses and individuals alike. Combining my
        technical expertise, creativity, and dedication to continuous
        improvement, I strive to create compelling digital experiences that
        exceed expectations.
      </p>
    </section>
  );
}
