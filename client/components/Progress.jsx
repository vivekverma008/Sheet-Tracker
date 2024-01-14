'use client'
import React from 'react'
import { motion } from "framer-motion";


const ProgressBar = ({ progress, className = '' }) => {
    return (
        <div className='w-1/2 relative h-4 mt-4 overflow-hidden rounded bg-gray-100 '>
            <motion.div
                className='bg-blue-600 h-full '
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
            >

            </motion.div>
        </div>
    );
}




const Progress = ({ total, done, className = '' }) => {
    return (
        <motion.div className={`${className} justify-center `}
            initial="hide"
            animate="show"
            transition={{ staggerChildren: 0.2 }}

        >

            {done} solved of {total}
            <div className='flex justify-center'>
                <ProgressBar progress={'40'} />
            </div>


        </motion.div>
    )
}

export default Progress