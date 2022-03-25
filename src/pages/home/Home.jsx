import React, { useRef } from 'react'
import useVisibility from './components/useVisibility'

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
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.6 }, skillsRef)
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.6 }, projectsRef)
  useVisibility({ root: null, rootMargin: '0px', threshold: 0.6 }, contactRef)

  return (
    <div className="min-h-[100vh]  text-primary-200 ">
      <div className="bg-[#114e9e] pr-8 pt-2">
        <nav className=" bg-[#7b38f800]">
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
        </nav>
      </div>
      <div className=" text-primary-200">
        <section id="Myself" className="bg-[#114e9e] " ref={myselfRef}>
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
          <h1>Abot Me</h1>
          <p>
            Eveniet, cum. Suscipit vitae modi maxime nemo cupiditate corporis
            architecto sit sint, quis nisi illum, reprehenderit, rem ducimus
            accusamus eaque quae. Commodi accusantium illum cum numquam ducimus
            facilis, culpa nostrum!
          </p>
        </section>
        <div className="spacer layer4" />
        <section className=" bg-[#610a94]" id="Skills" ref={skillsRef}>
          <h1>My Skills</h1>
          <p>
            Maiores assumenda tempora molestiae sapiente ut consequatur ad harum
            explicabo non, minima aspernatur facere a, ipsam at architecto
            nesciunt veritatis odit alias libero, sunt neque reprehenderit
            ratione quaerat repellendus! Explicabo.
          </p>
        </section>
        <div className="spacer layer1" />
        <section className=" bg-[#a10a50] red" id="Projects" ref={projectsRef}>
          <h1>My Projects</h1>
          <p>
            At fugit quidem quo? At maiores itaque, similique ad iste vel
            consequatur aliquam eveniet amet officia, veritatis veniam provident
            esse fugit laudantium labore praesentium debitis rem sed consectetur
            nesciunt aliquid!
          </p>
        </section>
        <div className="spacer layer2" />
        <section className=" bg-[#730761]" id="Contact" ref={contactRef}>
          <h1>Contact Me</h1>
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
