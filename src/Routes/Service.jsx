import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ServiceTrip from '../Components/ServiceTrip'

export default function Service() {
    return (
        <div>
            <Navbar />
            <Hero
            video = {false}
            image={true}
                cName='heroAbout'
                imageUrl='https://i.pinimg.com/originals/10/0b/b5/100bb5b73b8bb96d199ff550ab9ed2de.jpg'
                title='Services Provided'
                heroText='heroText'
                // text='Lift the Appetite to Raven the World'
                url='/'
                btnClass='btnContainerHide'
                // buttonText='Lets Travel'
            />
           
           <ServiceTrip/>

           <Footer/>
        </div>
    )
}
