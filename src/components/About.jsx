import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
         <h1 className=' text-6xl tracking-tight'>
            Ochi is a strategic for fast-growing tech businesses that need to raise funds,sell products,explain ideas,and hire great people.
         </h1>
         <div className='w-full flex gap-5 border-t-[1px] pt-20 mt-20 border-[#a1b562]'>
            <div className='w-1/2 '>
                <h1 className='text-5xl'>Our approach:</h1>
                <button className='px-10 py-6 uppercase flex gap-10 items-center bg-zinc-900 rounded-full text-white mt-10'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full '></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl'>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
         </div>
    </div>
  )
}

export default About