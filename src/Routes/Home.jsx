import React from 'react'
import Destination from '../Components/Destination'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Trip from '../Components/Trip'

export default function Home() {
    return (
        <div>
            <Navbar />
           <Hero
           cName='hero'
           video = {false}
           image={true}
           imageUrl='https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
           title='Lost in the Dream World'
           heroText='heroText'
           text='Lift the Appetite to Raven the World'
           url='/'
           btnClass='btnContainer'
           buttonText='Lets Travel'
           />
           <Destination/>
           <Trip/>
           <Footer/>
        </div>
    )
}
