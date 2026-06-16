import './Trip.css'

import React from 'react'
import TripData from './TripData'

const ServiceTrip= () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>you can discover new destinations using google maps.</p>
        <div className="trip-card-container">
            <TripData
                image='https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
                heading='Switzerland'
                text='Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts '
            />
            <TripData
                image='https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                heading='Greenland'
                text='More than three times the size of the U.S. state of Texas, Greenland extends about 1,660 miles (2,670 km) from north to south and more than 650 miles (1,050 km) from east to west at its widest point. Two-thirds of the island lies within the Arctic Circle, and the island’s northern .'
            />
            <TripData
                image='https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80'
                heading='Paris'
                text='Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral.'
            />
            
        </div>
        <div className="trip-card-container">
            <TripData
                image='https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg'
                heading='Iceland'
                text='Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal'
            />
            <TripData
                image='https://images.unsplash.com/photo-1640673612064-cf2fc627c60a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                heading='Taj Mahal'
                text='Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020'
            />
            <TripData
                image='https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-for-best-places-to-visit-in-July-in-the-world.jpg'
                heading='Macedonia'
                text='Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral.'
            />
            
        </div>

        <div className="trip-card-container">
            <TripData
                image='https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/cover-for-places-to-visit-in-September-in-the-world.jpg'
                heading='Canberra'
                text='Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts '
            />
            <TripData
                image='https://www.jonesaroundtheworld.com/wp-content/uploads/2021/07/Colloseum-Rome-Italy.jpg'
                heading='Roma'
                text='More than three times the size of the U.S. state of Texas, Greenland extends about 1,660 miles (2,670 km) from north to south and more than 650 miles (1,050 km) from east to west at its widest point. Two-thirds of the island lies within the Arctic Circle, and the island’s northern .'
            />
            <TripData
                image='https://engineeringdiscoveries.com/wp-content/uploads/2021/04/e87c8cc89adf4dab50122c9f7794552b.jpg'
                heading='Madrid'
                text='Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral.'
            />
            
        </div>
    </div>
  )
}

export default ServiceTrip