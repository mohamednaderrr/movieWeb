import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider';
import NavbarMenu from "../Components/navbar/Navbar"


import Hero from '../Components/Hero_Img/Hero';
const Home = () => {
    return (
        <div className='home pb-5'>
            <NavbarMenu />
            <Hero />
            <HomeSlider content="News"/>
            <HomeSlider content="Movie" />
            <HomeSlider content="Series "/>
            <HomeSlider content="Upcoming "/>
        </div>
    )
}

export default Home