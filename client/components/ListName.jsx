'use client'

import React from 'react'
import '@/app/globals.css'


const ListName = ({title}) => {

  console.log(title);
  title = (title ? title: 'Luv Babbar')

  return (
    <div className='font-heading text-4xl text-center p-10' >{title} </div>
  )
}

export default ListName