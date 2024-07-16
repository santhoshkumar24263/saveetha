import React from 'react'
import college from '../../assets/collegepic.jpeg'
import './HomeComponent.css'
import Footer from './Footer'
const HomeComponent = () => {
  return (
    <React.Fragment>
      <div className="homemaindiv" style={{marginBottom:"60px"}}>
      <img src={college} alt="CollegePicture" />
        <div className='textdiv'>
        <p className='h1'>Welcome to Our College</p><br/>
        <p className='h2'>Your future starts here. Learn more about our programs and events.</p>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default HomeComponent