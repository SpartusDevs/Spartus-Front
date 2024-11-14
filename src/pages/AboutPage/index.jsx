import React from 'react'
import MenuBar from '../../components/MenuBar/MenuBar'
import Body from './Body'

function AboutPage() {
  return (
    <div style={{color:'white', width:'100%', minHeight:'100vh'}}>
     <header className='header'>
       <MenuBar/>
      </header>
       <Body/>
    </div>
  )
}

export default AboutPage