import React from 'react'
import './drwaer.css'
function Profile() {
    return (
        <div>
            <img className="profileImg"
            src="https://avatars.githubusercontent.com/u/37290709?s=460&u=fe1dad5ae780bc4c93048afdbdc2353644d8b623&v=4"
            alt="profile"
            />
            <div className='NameSection'>
               <div className='name'>
                   Lidhish C
               </div>
               <div className='email'>
                   lidhishc@gmail.com
               </div>
            </div>
        </div>
    )
}

export default Profile
