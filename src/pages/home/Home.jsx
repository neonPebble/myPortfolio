import React, { useRef } from 'react'
// import Scrolltogradbutton from '../../components/Somecomponent'
import useVisibility from './components/useVisibility'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'
import ProjectCard2 from './components/ProjectCard2'
import ProjectCard3 from './components/ProjectCard3'
import Contactform from './components/Contactform'
import Scrolltogradbutton from './components/Scrolltogradbutton'

import resume from './components/pdfs/resume.pdf'

export default function Home() {
  const myselfRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  /* // you should not use hooks inside loops but in ths case it works
  const allRefs = [myselfRef, aboutRef, skillsRef, projectsRef, contactRef]
  allRefs.forEach(targetRef => {
    useVisibility({ root: null, rootMargin: '0px', threshold: 0.6 }, targetRef)
  })
  */

  useVisibility({ root: null, rootMargin: '0px', threshold: 0.6 }, myselfRef)
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.6 }, aboutRef)
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.2 }, skillsRef)
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.2 }, projectsRef)
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.4 }, contactRef)

  function navOpenHandler() {
    document.querySelector('nav').classList.toggle('navShowUp')
  }

  async function handleFileOpening() {
    const targetFile = resume
    window.open(targetFile, '_blank')
  }

  return (
    <div className="min-h-[100vh]  text-primary-200 relative ">
      <div className=" h-[40px] w-full bg-[#114e9e]" />
      <nav className=" bg-[#00000010] pr-8 pt-2 z-30  backdrop-blur-2xl">
        <ul className="flex justify-end no-underline list-none ">
          <li>
            <a href="#Myself" className="hover:text-[#00ffe1]">
              Myself
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-[#00ffe1]">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-[#00ffe1]">
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-[#00ffe1]">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-[#00ffe1]">
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="navBarTogl flex flex-col justify-center items-center h-min w-min p-[3px] absolute right-2 top-[2px] opacity-0 pointer-events-none"
          onClick={navOpenHandler} // nav bar 40px
        >
          <span className="whiteLine w-[30px] h-[4px] rounded-[18px] bg-black my-[3px]" />
          <span className="whiteLine w-[30px] h-[4px] rounded-[18px] bg-black my-[3px]" />
          <span className="whiteLine w-[30px] h-[4px] rounded-[18px] bg-black my-[3px]" />
        </button>
      </nav>

      <div className="relative z-20 text-primary-200">
        <section
          id="Myself"
          className="bg-[#114e9e] pt-[140px] "
          ref={myselfRef}
        >
          <h1>
            Hi I&apos;m <span className="text-[#05fdd4]">Akash Parhi</span>
          </h1>
          <p className=" flex flex-col justify-center items-center ">
            Front end developer
            <br />
            <Scrolltogradbutton
              scrollRef={contactRef}
              buttonText="Contact Me"
              scrollPosition="start"
            />
            <br />
            <br />
          </p>
        </section>
        <div className=" bg-gradient-to-b from-[#114e9e] to-[#022949]">
          <div className="spacer layer3" />
        </div>
        <section className=" bg-[#022949]" id="About" ref={aboutRef}>
          <h1>About Me</h1>
          <p>
            Hello, I&apos;m Akash Kumar Parhi. I&apos;m a Front-End Developer.
            <br />
            I have a passion for creating beautiful feature rich websites.
            <br />
            I have some Back-End skills and I am interested in learning more.
            <br />
            <div className="flex flex-col justify-center items-center">
              <button
                className=" bg-gradient-to-r from-[#ff00c3] via-[#bc02ff] to-[#2432f3] px-4 py-2 my-5 rounded-md resumeBtn"
                type="button"
                onClick={handleFileOpening}
              >
                Resume
              </button>
            </div>
          </p>
        </section>
        <div className="spacer layer4" />
        <section className=" bg-[#610a94]" id="Skills" ref={skillsRef}>
          <h1 id="Skills-header">My Skills</h1>
          <p>
            I am passionate about learning new skills and always improving
            existing skills
          </p>
          <div className="flex items-center justify-center cardContainer py-[40px] gap-10 flex-wrap">
            <SkillCard sType="front" /> <SkillCard sType="back" />
            <SkillCard sType="Tools" />
          </div>
        </section>
        <div className="spacer layer1" />
        <section className=" bg-[#a10a50] red" id="Projects" ref={projectsRef}>
          <h1 className="pb-5 ">My Projects</h1>

          <div className=" projectCardContainer cardContainer">
            <ProjectCard />
            <ProjectCard2 />
            <ProjectCard3 />
          </div>
        </section>
        <div className="spacer layer2" />
        <section className=" bg-[#730761]" id="Contact" ref={contactRef}>
          <h1>GET IN TOUCH</h1>
          <p>
            <span className=" text-[16px] tracking-wider">
              Email: akashparhi0@gmail.com
            </span>
            <br />
            <span className=" text-[16px]  tracking-wider">
              Phone: +91 6372646334
            </span>
          </p>
          <Contactform />
        </section>
        <div className="spacer layer5" />
      </div>
    </div>
  )
}
