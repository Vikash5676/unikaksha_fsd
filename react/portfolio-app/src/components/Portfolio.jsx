import React from "react";
import image from "../assets/avatar.jpg";
import "../App.css";

const Portfolio = () => {
  return (
    <>
      <section id="section1">
        <div class="name">
          <span class="name1">Hi, I`m</span> <span class="my_name">Vikash</span>
          <i class="fa-solid fa-hand fa-shake"></i>
        </div>
        <div class="title">Full-Stack Development Specialist.</div>
        <div class="desc">
          I worked on several front-end and Full-Stack projects, from small
          websites to large web applications. This hands-on experience has
          allowed me to develop skills that help me create efficient and
          effective solutions.
        </div>
        <div class="buttons">
          <a href="/">Hire Me</a>
          <a
            href="https://drive.google.com/uc?export=download&id=1MgcVBz2QfX7mYkwMaF060GMizs3e4vhq"
            download
          >
            My CV
          </a>
        </div>
      </section>
      <section id="section2">
        <h1>technologies</h1>
        <div class="marquee">
          <div className="tech">
            <i class="fa-brands fa-html5 fa-bounce"></i>
            <i class="fa-brands fa-css3-alt fa-beat-fade"></i>
            <i class="fa-brands fa-js fa-fade"></i>
            <i class="fa-brands fa-react fa-spin"></i>
            <i class="fa-brands fa-node-js fa-spin fa-spin-reverse"></i>
            <i class="fa-brands fa-bootstrap fa-flip"></i>
          </div>
        </div>
        <div class="experience">
          <div class="flex-box">
            <h1>Experience</h1>
            <div class="">
              <p>
                <b>Transform design</b> into web pages with
              </p>
              <p>
                agility, quality and <b>high performance</b>.
              </p>
            </div>
          </div>
          <div class="cards">
            <div class="card">
              <div class="icon">
                <i class="fa-solid fa-desktop fa-2xl"></i>
              </div>
              <div class="title1">Beyond the front-end</div>
              <div class="desc1">
                Highly skilled at progressive enhancement, design systems & UI
                development.
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fa-solid fa-bolt fa-2xl"></i>
              </div>
              <div class="title1">Frameworks</div>
              <div class="desc1">
                Familiar with various front-end frameworks and libraries.
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fa-brands fa-codepen fa-2xl"></i>
              </div>
              <div class="title1">Code</div>
              <div class="desc1">
                Experience in core programming languages for web development.
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fa-solid fa-mobile-screen fa-2xl"></i>
              </div>
              <div class="title1">Responsive Design</div>
              <div class="desc1">
                Keen eye for detail and strong understanding of user experience.
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fa-solid fa-laptop fa-2xl"></i>
              </div>
              <div class="title1">Optimization</div>
              <div class="desc1">
                SEO techniques to promote better ranking of your pages.
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fa-solid fa-code-branch fa-2xl"></i>
              </div>
              <div class="title1">UI Design</div>
              <div class="desc1">Interfaces for websites and applications.</div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section3"
        className="flex items-center flex-wrap justify-around gap-10 px-4 py-[2rem] min-h-[90vh] "
      >
        <h1 className="flex-[100%]">About Me</h1>
        <div class="introduction flex-[70%] flex-grow-0 md:basis-[50%] w-[70%] md:w-[50%]">
          Hi, I'm skilled and passionate full stack developer with expertise in
          both front-end and back-end technologies. With a comprehensive
          understanding of HTML, CSS, JavaScript, Python, and frameworks like
          Node.js and Django, I'm capable of creating robust and dynamic web
          applications. Experienced in database management, I'm proficient in
          working with SQL and NoSQL databases such as MySQL and MongoDB. As a
          proactive communicator and collaborative team player, I thrives in
          agile environments and is constantly eager to learn and stay
          up-to-date with the latest industry trends. With a strong focus on
          delivering transformative digital experiences, I'm dedicated to
          creating impactful solutions as a full stack developer.
        </div>
        <div class="relative flex-[70%] md:basis-[40%] flex-grow-0  h-[400px] overflow-hidden">
          <div class="circle"></div>
          <div class="free_shape"></div>
          <img
            src={image}
            alt="My avatar"
            className="absolute w-[80%] h-[80%] object-cover bottom-[10%] right-[10%]"
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
