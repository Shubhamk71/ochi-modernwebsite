import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";

function Landingpage() {

  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".6" className='w-full h-screen bg-zinc-900 pt-1 relative'>
      <div className='textstructure mt-52 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className='masker' key={index}>
              <div className='w-fit flex items-center'>
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='w-[9vw] h-[6vw] relative -top-[-0.5vw] bg-red-500 rounded-md'>
                    <img src="" alt="" />
                  </motion.div>
                )}
                <h1 className='uppercase text-[9vw] leading-[7vw] tracking-tighter font-["Founders_Grotesk_text font-regular"]'>{item}</h1>
              </div>
            </div>
          );
        })}

        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-center items-center py-5'>
          {["From the first pitch to IPO"].map((item, index) => (
            <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
          ))}
        </div>

        <div className='public-companies absolute bottom-5 left-5 flex items-center gap-5'>
          <div className='text-md font-light tracking-tight leading-none'>For public and private companies</div>
        </div>

        <div className='start absolute bottom-5 right-5 flex items-center gap-5'>
          <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>Start for project</div>
          <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500'>
            <span className='rotate-[45deg]'><FaLongArrowAltUp /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
