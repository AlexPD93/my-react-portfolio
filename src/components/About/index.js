import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As a motivated and self-taught Frontend Engineer with a background
            in entrepreneurship and hospitality management, I am excited to
            continue my career in engineering. This diverse background equips me
            with a valuable skill set and a strong foundation to excel at the
            intersection of various industries, where my problem-solving skills
            will help address the challenges of rapidly changing environments.
          </p>
          <p>
            I thrive in dynamic settings and am dedicated to ongoing personal
            and professional development. I see the potential to contribute to a
            dynamic and forward-thinking organisation as a significant
            opportunity that I am enthusiastic about pursuing.
          </p>
          <p>
            I'm passionate about sports, particularly football, which I enjoy
            both watching and playing. I love experimenting with cooking,
            constantly exploring new recipes and techniques. I'm also an
            enthusiastic foodie who enjoys discovering exciting new restaurants,
            whether locally or while traveling.
            <p>
              Exploring new destinations and experiencing different cultures is
              a significant part of my life. I'm an avid cyclist too, as it
              keeps me active and connected to the outdoors. These interests
              define me and reflect my curiosity and appreciation for a variety
              of experiences, both familiar and new.
            </p>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faVuejs} color="#3FB27F" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
