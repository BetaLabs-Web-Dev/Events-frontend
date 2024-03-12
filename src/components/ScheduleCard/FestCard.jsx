
const FestCard = () => {
  return (
    <div className='relative flex w-[80vw] md:w-[65vw] lg:w-[47vw] h-[100px] gap-5 m-4 border-2 border-purple-500 rounded-md flex-row'>
      <div className='flex w-[100px] flex-row bg-purple-500 items-center justify-center'>
        <sup className='text-[16px]'>Jan</sup>
        <span className='text-[60px]'>1<sub className='text-[16px]'>st</sub></span>
      </div>
      <div className="flex flex-col justify-items-center p-2">
        <div className="text-[22px] font-semibold">
          NEW YEAR
        </div>
        <div className="text-[14px] font-medium text-gray-300">
          SOMETHING ABOUT NEW YEAR
        </div>
      </div>
      <button className='absolute top-[25%] px-4 py-2 right-5 border-2 border-pink-500 rounded-md outline-none'>
        View
      </button>
    </div>
  )
}

export default FestCard