import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'
import '../styles/about.css'

const About = () => {
  return (
    <>
    <div className="about">
        <div class="container">
          <h1 className='h1'>About Us</h1>
          <p className='p'>Our Best place</p>
          <div class="image-container">
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1200px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg"} alt="About Us Image" />
          </div>
          <p className='p'>The original design for Ram Mandir was devised in 1988 by the Sompura family of Ahmedabad The Sompuras have contributed to the design of over 100 temples worldwide for at least 15 generations, including the Somnath temple. The chief architect of the temple was Chandrakant Sompura, assisted by his two sons, Nikhil Sompura and Ashish Sompura, who are also architects</p>
          <p className='p'>A new design, with some changes from the original, was prepared by the Sompuras in 2020, per the Hindu texts, the Vastu shastra and the Shilpa shastras.The temple will be 250 feet (76 m) wide, 380 feet (120 m) long and 161 feet (49 m) high. Upon completion, the temple complex became the world's third largest Hindu temple. It is designed in the Māru-Gurjara architecture of Nagara style, a type of Hindu temple architecture found primarily in northern India. A model of the proposed temple was showcased during the Prayag Kumbh Mela in 2019.</p>
          <Link to = "/home" class="btn primary__btn">Back to Home</Link>
        </div>
    </div>
    </>
  )
}

export default About
