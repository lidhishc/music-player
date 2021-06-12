import React from 'react'
import ListCard from './List'
import './topChart.css'
import music from '../../assets/music.jpg'
import music1 from '../../assets/music1.jpg'
import music2 from '../../assets/music2.jpg'
import music3 from '../../assets/music3.jpg'
import music4 from '../../assets/music5.jpeg'
import music5 from '../../assets/music4.jpeg'

function TopChart() {
    return (
        <div>
            <div className='topChart'>Billboard Topchart</div>
            <div className='topChartCards'>
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music} index={true}/>
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music1}  />
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music2} />
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music3}/>
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music4}/>
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music5}/>
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music1}  />
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music2} />
            <ListCard title='ABC EFG' subTitle='Shawn Morfy' image={music3}/>
           
         

            </div>
        </div>
    )
}

export default TopChart

