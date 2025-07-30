import './index.scss'
import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Don't hesitate to contact me on{' '}
            <a href="https://www.linkedin.com/in/aperezdavies/">LinkedIn</a>{' '}
            with any Full-Stack Software Engineer opportunities.
          </p>
        </div>
        <div className="info-map">
          Alex Perez-Davies
          <br />
          South Tottenham, London
          <br />
          United Kingdom
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.581386, -0.088]} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.581386, -0.088]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
