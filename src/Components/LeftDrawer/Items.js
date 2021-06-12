import React from 'react'
import './drwaer.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function Items({item}) {
    return (
        <div className='items'>
                <HomeOutlinedIcon className='icons' 
                fontSize='larger'
                />
                <span className='ItemName'>
                Home
                </span>
        </div>
    )
}

export default Items
