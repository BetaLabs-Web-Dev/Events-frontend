import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FestCard = () => {
  const [dropdown,setdropdown] = useState(false)
  const dropbox = (dropdown)?"rotate-180":null
  return (
    <div className='relative flex w-1/2 h-24 gap-5 m-4 border-2 border-purple-500 rounded-lg font-josefin'>
        <div className='flex items-center justify-center w-1/5 h-full gap-1 text-2xl font-bold tracking-widest bg-gray-300 rounded-l-lg opacity-80 '>
            <sup className=''>Jan</sup>
            <span className='text-5xl '>1</span>
        </div>
        <div className="flex flex-col gap-2 pt-1">
          <div className="text-2xl font-semibold">
            NEW YEAR
          </div>
          <div className="text-sm font-medium text-gray-200">
          SOMETHING ABOUT NEW YEAR
          </div>
        </div>
        <button onClick={()=>{setdropdown(!dropdown)}} className={`absolute  right-6 top-6 ${dropbox}`} >
          <ExpandMoreIcon sx={{fontSize:"2.5rem"}} />
        </button>
    </div>
  )
}

export default FestCard