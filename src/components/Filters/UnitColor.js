import React, { useCallback, useState } from 'react';

export const setColors = {
    "Purple":"#8434E1",
    "Black":"#252525",
    "White":"#FFFFFF",
    "Gray": "#808080",
    "Blue": "#0000FF",
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Navy": "#000080",
    "Grey": "#808080",
    "Yellow": "#FFFF00",
    "Pink": "#FFC0CB",
    "Green": "#008000"

}

const UnitColor = ({colors}) => {

  const [aplColors,setAplColors] = useState([]);
  const div = useCallback((item)=>{
    if(aplColors.indexOf(item) > -1){
      
      setAplColors(aplColors?.filter(color => color !== item));
    }
    else{
      setAplColors([...aplColors,item]);
    }
  },[aplColors,setAplColors]);

  return (
    <div className='flex flex-col mb-4'>
        <p className='text-[16px] text-black mt-5 mb-5'>Colors</p>
        <div className='flex flex-wrap px-2'>
            {colors?.map(item=> {
              return (
                <div className='flex flex-col mr-2'>
                  <div className='w-8 h-8 border rounded-xl mr-4 cursor-pointer hover:scale-110' onClick={()=>div(item)} style={{background:`${colors[item]}`}}></div>
                  <p className='text-sm text-gray-400 mb-2' style={{color:`${aplColors?.includes(item) ? 'black':''}`}}>{item}</p>
                  </div>
              )
            })}
        </div>
    </div>
  )
}

export default UnitColor
