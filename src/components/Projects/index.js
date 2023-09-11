import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import './index.scss'

import AnimatedLetters from '../AnimatedLetters'
import projectData from '../../data/projects.json'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const renderProject = (projects) => {
    return (
      <div className="images-container">
        {projects.map((proj, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={proj.cover} className="project-image" alt="project" />
              <div className="content">
                <p className="title">{proj.title}</p>
                <h4 className="description">{proj.description}</h4>
                <button
                  className="button"
                  onClick={() => window.open(proj.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container project-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
      </h1>
      <div>{renderProject(projectData.projects)}</div>
      <Loader type="pacman" />
    </div>
  )
}

export default Projects
