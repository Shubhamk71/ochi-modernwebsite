import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Features2() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className='w-full py-20 relative'>
      <div className='px-20'>
        <div className='cards w-full flex gap-20 mt-10 relative'>
          <div
            onMouseEnter={() => setHoveredItem("trawa")}
            onMouseLeave={() => setHoveredItem(null)}
            className='cardcontainer relative w-1/2 h-[75vh] overflow-hidden'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='card w-full h-full rounded-xl overflow-hidden'
            >
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
            </motion.div>
          </div>
          <div
            onMouseEnter={() => setHoveredItem("premiumBlend")}
            onMouseLeave={() => setHoveredItem(null)}
            className='cardcontainer relative w-1/2 h-[75vh] overflow-hidden'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='card w-full h-full rounded-xl overflow-hidden'
            >
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </motion.div>
          </div>
        </div>
        {hoveredItem && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0 flex items-center justify-center text-[#CDEA68] z-[10] leading-none font-semibold tracking-tight text-8xl font-Calibri pointer-events-none'
          >
            {hoveredItem === "trawa" ? "TRAWA" : "PREMIUM BLEND"}
          </motion.h1>
        )}
      </div>
    </div>
  );
}

export default Features2;
