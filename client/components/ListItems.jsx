'use client'
import React, { useState } from 'react'
import Switch from './Switch'
import { useDragControls, Reorder, useMotionValue } from 'framer-motion';
import { useRaisedShadow } from './hooks/useRaisedShadow';
import { ReorderIcon } from './ReorderIcon';
import '@/app/globals.css';
import Link from 'next/link';

const ListItems = ({ value , ind }) => {

    const [isOn, setIsOn] = useState(true);
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);
    const dragControls = useDragControls();




    const handleToggle = function () {
        setIsOn(!isOn);
    }


    return (


        <Reorder.Item
            value={value}
            id={value.id}
            style={{ boxShadow, y }}
            dragListener={false}
            dragControls={dragControls}
            className='rounded-full w-full m-1 mt-3 p-2 md:p-3 drop-shadow-md bg-purple-400  flex shadow-sm shadow-purple-900 items-center select-none relative min-h-20 '

        >

            <div onClick={handleToggle}>
                <Switch isOn={isOn} className={'mx-4'} />

            </div>
            <div className='block font-Nunito tracking-wider text-2xl overflow-hidden'>
                <Link href={value.href} target='_blank'>
                {value.title}
                
                </Link>
                
            </div>
            <div>
                <ReorderIcon dragControls={dragControls} className={'absolute right-8 bottom-1/3 cursor-grab'} />
            </div>
           



        </Reorder.Item>




    )
}

export default ListItems