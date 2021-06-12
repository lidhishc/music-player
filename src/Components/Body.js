import React from 'react'
import Header from './Header/Header'
import MostPopular from './MostPopular/MostPopular'
import NowPlaying from './NowPlaying/NowPlaying'
import TopChart from './TopChart/TopChart'
import './topComponents.css'
function Body() {
    return (
        <div className='bodyClass'>
           <div className='header'>
           <Header />
           </div>
           <div className='toper'>
           <TopChart />
           </div>
            <div className= 'playerDetails'>
                <div className='popular'>
                <MostPopular />
                </div>
                <div className='playing'>
                <NowPlaying />
                </div>
               
            </div>
        </div>
    )
}

export default Body
