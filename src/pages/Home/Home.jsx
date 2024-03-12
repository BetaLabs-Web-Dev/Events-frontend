import React from 'react'
import Hero from '../../components/Hero/Hero'
import Feedback from '../../components/Feedback/Feedback'
import Dregister from '../../components/Dregister/Dregister'
import PastEvent from '../../components/PastEvents/PastEvent'
import Schedule from '../../components/EventSchedule/schedule'

const Home = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Hero />
            <Dregister />
            <Schedule />
            <PastEvent />
            <Feedback />
        </div>
    )
}

export default Home
