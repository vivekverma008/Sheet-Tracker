'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import MoonSvgComponent from './MoonSvgComponent';
import SunSvgComponent from './SunSvgComponent';

const NavItems = ({ className = '', title = '', dropdown = false }) => {

    return (
        <div className={`${className} inline-block relative group cursor-pointer`}>

            {dropdown ? <>{title}</> : `${title}`}
            <span className='h-1 w-0 bg-slate-200 inline-block absolute bottom-[-6px] left-0 
                group-hover:w-full 
                transition-all duration-200 ease-in-out 
            '>&nbsp;</span>
        </div>
    )
}


const DropDownItems = ({ href = '#', className = '', title = '' }) => {
    return (
        <>
            <Link href={href}>
                <div className={`${className} z-1 text-gray-50 block px-1 border-slate-50 bottom-1 border bg-slate-800 p-4 text-sm font-bold justify-center align-middle 
                transition-all duration-300 ease-in-out group:
                `}>
                    <div className='block'>{title}</div>
                </div>
            </Link>

        </>
    )
}




const variants = {
    open: { opacity: 1, scale: 0.99 },
    closed: { opacity: 0 },
}



const NavBar = ({sheetx}) => {

    const [sheets  , setSheets] = useState(null);
    const [dropDownVisibility, setDropDownVisibility] = useState({ sheets: false, user: false });

    console.log(sheetx);
    useEffect(()=>{
       setSheets(sheetx.sheets); 
    },[sheetx]);


    const handleToggle = (id) => {
        setDropDownVisibility(previousState => {
            return { ...previousState, [id]: !previousState[id] }
        })
    }

    return (
        <header className='flex justify-around p-8  bg-purple-800 w-full min-h-32  align-middle text-white font-bold tracking-widest text-2xl lg:text-3xl ' >
            <div className='relative h-auto cursor-pointer' onClick={() => handleToggle('sheets')}  >
                <NavItems title='$heets' dropdown={true} className='inline-block' />
                {dropDownVisibility.sheets == true ? <>&#8963;</> : <>&#8964;</>}
                <motion.div
                    animate={dropDownVisibility.sheets == true ? "open" : "closed"}
                    variants={variants}
                    initial={"closed"}
                    className={`absolute z-[1] ${dropDownVisibility.sheets == false ? 'hidden' : ''}`}
                >
                    {sheets!=null && sheets.map((sheet) => {
                        return <DropDownItems key={sheet.id} title={`${sheet.title}`} href={`/sheets/${sheet.slug}`} />
                    })}

                </motion.div>

            </div>
            {/* <SunSvgComponent/> */}
            <MoonSvgComponent />
            <div>

            </div>

            <div className='relative h-auto cursor-pointer ' onClick={() => handleToggle('user')}  >
                <NavItems title='Vivek' className='relative' dropdown={true} />
                {dropDownVisibility.user == true ? <>&#8963;</> : <>&#8964;</>}
                <motion.div
                    animate={dropDownVisibility.user == true ? "open" : "closed"}
                    variants={variants}
                    initial={"closed"}

                    className={`absolute z-[1] ${dropDownVisibility.user == false ? 'hidden' : ''}`}
                >

                    <DropDownItems key={'sign-Out'} title='SignOut' />
                    <DropDownItems key={'Dashboard'} title='DashBoard' href='/dashboard' />

                </motion.div>

            </div>
        </header>
    )
}

export default NavBar