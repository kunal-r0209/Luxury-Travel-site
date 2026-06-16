import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImage from '../Assets/Images/tra2.jpg'
import Trip from '../Components/Trip'
import Destination from '../Components/Destination'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

export default function About() {
    return (
        <div>
            <Navbar />
            <Hero
            video = {false}
            image={true}
                cName='heroAbout'
                imageUrl={AboutImage}
                title='About Us'
                heroText='heroText'
                // text='Lift the Appetite to Raven the World'
                url='/'
                btnClass='btnContainerHide'
                // buttonText='Lets Travel'
            />
          <AboutUs/>
           <Footer/>
        </div>
    )
}
