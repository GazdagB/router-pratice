import React from 'react'
import HomeImg from '../images/heroimg.png'
import Profile from '../images/profile.png'
import ProfileColored from '../images/profile-colored.png'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCode } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='Home'>
        <img src={Profile} alt="" />
        <div className='hero-text'>
            <h1>Hello,World! 👋🏻 <br></br> My name is Balázs!
            </h1>
            <div className="body">
                <div className="bar"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique voluptatem explicabo sequi quae dolor error asperiores. Libero esse, exercitationem a reiciendis ea possimus, maxime rem, laudantium voluptates sed sint? Autem ipsum quidem, fugiat dignissimos minima dolor tempore possimus. Rem esse vero voluptatem ullam. Temporibus corrupti voluptatum vitae ducimus ipsam!</p>
            </div>
            <div className='jobs'>
                <h2> <FontAwesomeIcon icon={faPencil} className='faPencil' /> Designer</h2>
                <h2>&</h2>
                <h2><FontAwesomeIcon icon={faCode} className='faCode'/> Fullstack Developer</h2>
            </div>
            <Button text={"More About me.."} url={"/about"} color={"#d0d0d0"} hoverColor={"#ff6819"}/>
        </div>
    </div>
  )
}

export default Home