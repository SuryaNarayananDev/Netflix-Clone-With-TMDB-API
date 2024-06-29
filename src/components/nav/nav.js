import React from 'react'
import './nav.css'
function nav() {
  return (
    <div className='navbar'>
        <img className='netflix_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix'/>
        <img className='avatar_logo' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='Netflix'/>
        <div className='buttons'>
            <button className='btn'>Home</button>
            <button className='btn'>Tv Shows</button>
            <button className='btn'>Movies</button>
            <button className='btn'>My List</button>
            <button className='btn'>Settings</button>
        </div>
    </div>
  )
}

export default nav
