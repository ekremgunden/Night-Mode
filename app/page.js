"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion';

export default function Header() {
  const [isDarkMode, setİsDarkMode] = useState(false)

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className={isDarkMode ? 'min-h-screen flex items-center justify-center bg-black' : 'min-h-screen flex items-center justify-center bg-white' }>
      <div className={isDarkMode ? "w-[80px] h-[50px] bg-[#537188] flex justify-end rounded-full p-[10px] cursor-pointer z-10" : "w-[80px] h-[50px] bg-[#79E0EE] flex justify-start rounded-full p-[10px] cursor-pointer z-10"} onClick={()=>setİsDarkMode(!isDarkMode)}>
        <motion.div className={isDarkMode ? "w-[30px] h-[30px] bg-svg-moon z-50 rounded-full" : "w-[30px] h-[30px] bg-svg-sun z-50 rounded-full"} layout transition={spring} />
      </div>
    </div>
  )
}
