import React from 'react'
import Hero from '../../components/Hero/Hero'
import Feedback from '../../components/Feedback/Feedback'
import Footer from '../../components/Footer/Footer'
import Dregister from '../../components/Dregister/Dregister'
import PastEvent from '../../components/PastEvents/PastEvent'
import Schedule from '../../components/EventSchedule/schedule'

const Home = () => {
    return (
        <div className='flex flex-col gap-20 mt-10'>
            <Hero />
            <Dregister />
            <Schedule />
            <PastEvent />
            <Feedback />
            <Footer />
        </div>
    )
}

export default Home
