'use client'

import React from 'react'
import { motion } from 'framer-motion'



const container = {
    hidden : {
        opacity : 0
    },
    show : {
        opacity : 1,
        transition : {
            staggerChildren : 0.25
        }
    }
}


const item = {
    hidden : {opacity : 0},
    show : {opacity : 1}
}





const Animated = ({text , className}) => {
    
    text = (text ? text: "");

  return (
    <motion.div     
        variants={container}
        initial = "hidden"
        animate = "show"
        className = {`${className} overflow-hidden text-5xl font-heading text-stone-800`}
    >
        {text.split(" ").map((word , ind)=>{
            return <motion.span className='inline-block ' key={ind} variants = {item}>
                {word }&nbsp;
            </motion.span>
        })}
        

    </motion.div>
  )
}

export default Animated