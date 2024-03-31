import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen  bg-zinc-100 flex items-center gap-5 px-32'>
<div className='cardcontainer w-1/2 h-[50vh]'>
<div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
    <button className='absolute left-10 border-2 px-5 py-1 rounded-full bottom-10 text-white'>&copy;2019-2022</button>
</div>
</div>

<div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
<div className='card relative w-full h-full rounded-xl bg-[#192826] flex items-center justify-center'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
    <button className='absolute left-10 border-2 px-5 py-1 rounded-full bottom-10 text-white'>Rating 5.0 0n Clutch</button>
</div>
<div className='card relative w-full h-full rounded-xl bg-[#5d3d10] flex items-center justify-center'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
    <button className='absolute left-10 border-2 px-5 py-1 rounded-full bottom-10 text-white'>BUSINESS BOOTCAMP</button>
</div>

</div>
    </div>
  )
}

export default Cards