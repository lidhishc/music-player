import React from 'react'
import PopularItem from './PopularItem'
function MostPopular() {
    return (
        <div style={{width:'100%'}}>
            <div className='popularTitle'>Most Popular</div>
            <div>92 Songs</div>
            <div className='playCardItems'>
                <PopularItem fav={true}/>
                <PopularItem />
                <PopularItem fav={true}/>
                <PopularItem fav={true}/>
                <PopularItem />
                <PopularItem />
                
            </div>
        </div>
    )
}

export default MostPopular
