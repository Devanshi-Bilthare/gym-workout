import React from 'react'
import BodyPart from './BodyPart'
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'


const HorizontalScrollBar = ({data,bodyPart,setBodyPart}) => {

  return (
    <div className='flex flex-nowrap overflow-x-scroll gap-10 w-full h-80 px-20'>
        {
            data.map((item,idx)=>(
                <div 
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                > 
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </div>
            ))
        }
    </div>
  )
}

export default HorizontalScrollBar