'use client'

import React, { useEffect, useState } from 'react'
import TopicCards from './TopicCards'
import SortableList from 'react-easy-sort';
import { SortableItem } from 'react-easy-sort';
// import {arrayMoveMutable }from "array-move";
import { arrayMoveImmutable } from 'array-move';






const CardList = ({topics , sheetName , sheet}) => {
    const [items, setItems] = useState([]);

    

    useEffect(()=>{
        setItems(topics);
    },[topics])

    

    const onSortEnd = (oldIndex, newIndex) => {
        setItems((items) => arrayMoveImmutable(items, oldIndex, newIndex));
    }




    return (

        
            <SortableList
                onSortEnd={onSortEnd}
                className='flex flex-wrap gap-12   align-middle justify-between   '
                draggedItemClassName='dragged'
                
            >
                {
                    items.map((topic, ind) =>
                        
                        <SortableItem key={ind}>
                            <TopicCards topic={topic} sheetName = {sheetName}  />
                        </SortableItem>
                    )
                }

            </SortableList>
        







    )
}

export default CardList