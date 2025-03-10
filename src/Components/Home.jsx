import React from 'react'
import Navbar from './Navbar'
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <MainContent/>
        </div>

    </>
  )
}
