import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Features() {
  const [isHovering, setHovering] = useState({ fyde: false, vise: false });

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
        <h1 className='text-7xl font-Gilroy tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-20 mt-10'>
          <div
            onMouseEnter={() => setHovering({ fyde: true, vise: false })}
            onMouseLeave={() => setHovering({ fyde: false, vise: false })}
            className='cardcontainer relative w-1/2 h-[75vh] overflow-hidden'
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='card w-full h-full rounded-xl overflow-hidden'
            >
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </motion.div>
            {isHovering.fyde && (
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
                className='absolute text-[#CDEA68] overflow-hidden right-0 left-0 mx-auto w-max top-1/2 -translate-y-1/2 z-[9] leading-none font-semibold tracking-tight text-8xl font-Calibri text-center'
              >
                FYDE
              </motion.h1>
            )}
          </div>
          <div
            onMouseEnter={() => setHovering({ fyde: false, vise: true })}
            onMouseLeave={() => setHovering({ fyde: false, vise: false })}
            className='cardcontainer relative w-1/2 h-[75vh] overflow-hidden'
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='card w-full h-full rounded-xl overflow-hidden'
            >
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </motion.div>
            {isHovering.vise && (
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
                className='absolute text-[#CDEA68] overflow-hidden right-0 left-0 mx-auto w-max top-1/2 -translate-y-1/2 z-[9] leading-none font-semibold tracking-tight text-8xl font-Calibri text-center'
              >
                VISE
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
