import React from "react";
import "./About.css";
import mehdi from "../mehdi2.jpg";

function About() {
  return (
    <div className="container py-5 px-5 aboutContainer">
      <div className="row ">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img src={mehdi} alt="Mehdi" className="profile-img" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
            My name’s Mehdi and I’d like to help companies to grow their
            business and brand by writing, documenting, testing, and delivering
            scalable software applications. As a highly skilled software
            developer with 4 years of experience, I was involved with
            development of software programs in the energy and tech industries.
            Throughout my work experience, along with my education, I utilized
            .NET Core, .NET Framework and C# to develop web services, windows
            services, and web applications. My experience in software
            development started with my engineering roles in the energy
            industry. I was involved with developing multiple software programs
            by working in Agile teams. I also wrote more than 5 high quality
            scripts in Python, C# and JavaScript to automate procedures and
            increase work efficiency. After several years of self-study into
            various software technologies, I decided to formally enrol into a
            Software Development program at Southern Alberta Institute of
            Technology (SAIT). I graduated from this program in 2021 and further
            improved my skills with tools and technologies such as C#, .NET
            Core, JavaScript, and NodeJS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
