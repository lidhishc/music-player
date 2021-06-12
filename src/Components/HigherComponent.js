import React from 'react'
import Drawer from './LeftDrawer/Drawer'
import Body from './Body'
import './topComponents.css'
function HigherComponent() {
    return (
        <div className="topLevel">
          <div className='drawer'>
          <Drawer />
          </div>
           <div className='body'>
           <Body />
           </div>
        </div>
    )
}

export default HigherComponent
