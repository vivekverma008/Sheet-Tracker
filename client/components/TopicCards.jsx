'use client'
import React from 'react'
import Progress from './Progress';
import { motion } from "framer-motion"

import Link from 'next/link';

const TopicCards = React.forwardRef(({ topic,sheetName }, ref) => {
  console.log(topic);
 
  
  return (
    <Link href={`${sheetName}/${topic}`} >
      <motion.div ref={ref} whileHover={{ opacity: 0.8 }} className='flex flex-col flex-wrap w-96 min-w-60 h-96 bg-purple-400 rounded-3xl relative text-black justify-center m-2 text-center select-none z-0 shadow-md shadow-purple-800 ' >
        <div className='absolute top-3 text-2xl font-Nunito text-blue-950 overflow-hidden left-1/2 -translate-x-1/2 tracking-widest'>{topic}</div>

        <Progress />
      </motion.div>
    </Link>
  )
});


TopicCards.displayName = 'TopicCards';

export default TopicCards