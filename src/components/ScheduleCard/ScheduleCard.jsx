import React from 'react';
import FestCard from './FestCard';
const ScheduleCard = () => {
    return (
        <div className='relative flex flex-col justify-center gap-4 my-5 items-center'>
            <span className='text-[32px] font-bold tracking-wider'>January</span>
            <div className="">  
                <FestCard />
                <FestCard />
                <FestCard />
            </div>
        </div>
    )
}

export default ScheduleCard;

// const data = [
//     {
//       index:0,
//       month: `January`,
//       image: `./pic.png`,
//       content1:`New Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
//     {
//       index:1,
//       month: `February`,
//       image: `./pic.png`,
//       content1:`Leap Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
    
//      {
//       month: `March`,
//       image: `.pic.png`,
//       content1:`Holi`,
//       content2:`Something something something`,
//       content3 : `something`,
    
//      },
//     {
//       month: `April`,
//       image: `.\pic.png`,
//       content1:`New Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
//     {
//       month: `May`,
//       image: `.\pic.png`,
//       content1:`Leap Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
    
//     {
//       month: `June`,
//       image: `.\pic.png`,
//       content1:`Holi`,
//       content2:`Something something something`,
//       content3 : `something`,
    
//     },
//     {
//       month: `July`,
//       image: `.\pic.png`,
//       content1:`New Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
//     {
//       month: `August`,
//       image: `.\pic.png`,
//       content1:`Leap Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
    
//     {
//       month: `September`,
//       image: `.\pic.png`,
//       content1:`Holi`,
//       content2:`Something something something`,
//       content3 : `something`,
    
//     },
//     {
//       month: `October`,
//       image: `.\pic.png`,
//       content1:`New Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
//     {
//       month: `November`,
//       image: `.\pic.png`,
//       content1:`Leap Year`,
//       content2:`Something something something`,
//       content3 : `something`,
//     },
    
//     {
//       month: `December`,
//       image: `.\pic.png`,
//       content1:`Holi`,
//       content2:`Something something something`,
//       content3 : `something`,
    
//     },
//   ]