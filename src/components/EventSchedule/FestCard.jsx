
const FestCard = () => {
  return (
    <div className='relative flex w-[75vw] md:w-[65vw] lg:w-[47vw] h-[100px] gap-1 md:gap-5 m-4 border-2 border-purple-500 rounded-md flex-row'>
      <div className='flex w-[80px] md:w-[100px] flex-row bg-purple-500 items-center justify-center'>
        <sup className='text-[12px] md:text-[16px]'>Jan</sup>
        <span className='text-[30px] md:text-[60px]'>1<sub className='text-[12px] md:text-[16px]'>st</sub></span>
      </div>
      <div className="flex flex-col justify-items-center p-2">
        <div className="text-[18px] md:text-[22px] font-semibold">
          NEW YEAR
        </div>
        <div className="text-[12px] md:text-[14px] font-medium text-gray-300">
          SOMETHING ABOUT NEW YEAR
        </div>
      </div>
      <button className='absolute top-[65%] md:top-[40%] px-2 md:px-4 py-1 md:py-2 right-1 md:right-5 border-2 border-pink-500 rounded-md outline-none text-[12px] md:text-[16px]'>
        View
      </button>
    </div>
  )
}

export default FestCard