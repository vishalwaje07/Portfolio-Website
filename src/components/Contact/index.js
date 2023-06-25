import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_iyeelni',
      'template_yhukb3a',
      form.current,
      'oxXhqXHIAveGiNYIF')
      .then((result) => {
        alert('Message successfully sent!')
      }, (error) => {
        alert('Failed to send the message, please try again')
      });
  }

  return (
    <>
      <div className="container contact-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in Full Stack developement opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me.
          </p>
          <div className="contact-form">

            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="Submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Vishal Waje,
          <br />
          Karvenagar, Pune <br />
          India.<br />
          <span>vishalwaje09@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[18.488632265750283, 73.81821539415972]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.488632265750283, 73.81821539415972]}>
              <Popup>Vishal lives here, come over for a cup of coffee.</Popup>
            </Marker>
          </MapContainer>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact;