import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Hero
            video = {false}
            image={true}
                cName='heroAbout'
                imageUrl='https://mobimg.b-cdn.net/v3/fetch/08/08f9910061387c5cf04b72cb877b9c67.jpeg'
                title='Contact Us'
                heroText='heroText'
                // text='Lift the Appetite to Raven the World'
                url='/'
                btnClass='btnContainerHide'
            // buttonText='Lets Travel'
            />

           <ContactUs/>

            <Footer/>

        </div>
    )
}
