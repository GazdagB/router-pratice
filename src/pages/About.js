import React from 'react'
import './About.css'
import ProfileImg from "../images/profile-colored.png"

const About = () => {
  return (

    <div className="about">
        <div className='about-container'>
        <img src={ProfileImg} alt="" />
        <div className="about-text">
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolorem provident quod? Obcaecati impedit ducimus veritatis aperiam saepe ab. Nam, hic? Cum, error, quod voluptas impedit, expedita veritatis eveniet dolores similique praesentium atque omnis odio perspiciatis libero culpa cupiditate. Eaque voluptate deserunt perspiciatis, similique earum quod! Ipsa consectetur laudantium rerum quae deserunt adipisci atque porro soluta facere officia! Repudiandae rerum commodi a optio inventore nulla, magni perferendis dolor delectus eligendi ratione nemo ut quisquam obcaecati?</p>
          </div>
        </div>
    </div>
  )
}

export default About