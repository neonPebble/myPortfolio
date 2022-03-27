import React, { useRef } from 'react'
import useVisibility from './components/useVisibility'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'
import ProjectCard2 from './components/ProjectCard2'
import ProjectCard3 from './components/ProjectCard3'

// import Somecomponent from './components/Somecomponent'

export default function Home() {
  // const [someInput, setSomeInput] = useState('')
  // const [someArray, setSomeArray] = useState([])
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
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.6 }, contactRef)

  function navOpenHandler() {
    document.querySelector('nav').classList.toggle('navShowUp')
  }

  return (
    <div className="min-h-[100vh]  text-primary-200 relative ">
      <div className=" h-[40px] w-full bg-[#114e9e]" />
      <nav className=" bg-[#00000010] pr-8 pt-2 z-30  backdrop-blur-2xl">
        <ul className="flex justify-end no-underline list-none">
          <li>
            <a href="#Myself" className="hover:text-[#b922e7]">
              Myself
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-[#b922e7]">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-[#b922e7]">
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-[#b922e7]">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-[#b922e7]">
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            totam, necessitatibus nobis quasi a qui aut quaerat illo corporis,
            dignissimos ea vel delectus ipsum dolorem quisquam doloremque
            similique fuga expedita?
          </p>
        </section>
        <div className="spacer layer3" />
        <section className=" bg-[#022949]" id="About" ref={aboutRef}>
          <h1>About Me</h1>
          <p>
            Eveniet, cum. Suscipit vitae modi maxime nemo cupiditate corporis
            architecto sit sint, quis nisi illum, reprehenderit, rem ducimus
            accusamus eaque quae. Commodi accusantium illum cum numquam ducimus
            facilis, culpa nostrum!
          </p>
        </section>
        <div className="spacer layer4" />
        <section className=" bg-[#610a94]" id="Skills" ref={skillsRef}>
          <h1 id="Skills-header">My Skills</h1>
          <p>
            Maiores assumenda tempora molestiae sapiente ut consequatur ad harum
            explicabo non, minima aspernatur facere a, ipsam at architecto
            nesciunt veritatis odit alias libero, sunt neque reprehenderit
            ratione quaerat repellendus! Explicabo.
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
            Aliquid numquam harum quo quam culpa illum totam ullam nisi
            consequuntur! Aut animi debitis unde fugiat hic modi, vero numquam
            provident. Necessitatibus similique quia suscipit distinctio dolor,
            neque quas. Tempore?
          </p>
        </section>
        <div className="spacer layer5" />
      </div>
    </div>
  )
}
