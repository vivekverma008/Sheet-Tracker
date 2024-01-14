'use client'

import React from 'react'
import ListItems from '@/components/ListItems'
import { Reorder } from 'framer-motion'
import { useState ,useEffect} from 'react'



const ListContainer = ({itemsProp}) => {

    const[items , setItems] = useState([]);

    useEffect(()=>{
        
        setItems(itemsProp);
        setItems((prev_items)=>{
          return prev_items.map((item , ind)=>{
            return {...item , id : ind}
          })
          
        })
        
       
    },[itemsProp])




  return (
    
    <Reorder.Group axis='y' onReorder={setItems} values={items} >
        
                    {items.map((item , ind) => {

                    return (
                        <ListItems key={item.id} value = {item} ind = {ind}  />
                    )
                    })}


    </Reorder.Group>

  )
}

export default ListContainer