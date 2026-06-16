import './Destination.css'
import DestinationData from './DestinationData'


export default function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the oppurtunity to see you alot, within a time frame</p>
           <DestinationData
           cName='firstDesc'
           heading='Taal Volcano,Batangas'
           headingText='The volcano proper forms the Volcano Island, 
           composed of seven volcanic cones and the caldera lake. 
           Taal Lake is also a volcanic caldera, so the system is quite complex;
           some locals speak of underwater craters in the larger lake. 
           Volcanic activity can be noticed through changes in Taal Lake; some fish kill incidents on the lake are blamed on volcanic activity, 
           though overcrowded fish pens (baklad) are often the cause.From Tagaytay, Taal Volcano, alongside Taal Lake, dominate the landscape, 
           with the dormant cone Binintiang Malaki being the most prominent. 
           The volcano is covered by vegetation up to the tree line at the crater lake. 
           On the base are some villages relying on fishing in Taal Lake and agriculture in the fertile soil of Volcano Island.'
           img1='https://mobimg.b-cdn.net/v3/fetch/cd/cdec41d93ed56c7528047acd72c90d7d.jpeg'
           img2="https://images.unsplash.com/photo-1480099835147-7b8f6c6f8b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTE4MTMyM3x8ZW58MHx8fHw%3D&w=1000&q=80"
           />
           <DestinationData
           cName='firstDesc-reverse'
           heading='Mt. Daguldool Batangas'
           headingText='Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.

           The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, the mountain was named as such because it describes the magnificence of the mountain range and the blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers. '
           img1='https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80'
           img2="https://i.insider.com/5743540f308309191e8b4842?width=750&format=jpeg&auto=webp"
           />
        </div>
    )
}
