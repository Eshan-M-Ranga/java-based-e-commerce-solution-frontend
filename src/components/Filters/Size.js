import React, { useCallback, useEffect, useState } from 'react'

const Size = ({sizes,title,multi=true,onChange}) => {

  const [appSize,setAppSize] = useState([]);

  useEffect(()=>{
    onChange && onChange(appSize);
  },[appSize, onChange])
  
  const onClickDiv = useCallback((item)=>{
    if(appSize.indexOf(item) > -1){  
      setAppSize(appSize?.filter(size => size !== item));
    }
    else{
      if(multi){
        setAppSize([...appSize,item]);
      }
      else{
        setAppSize([item]);
      }
    }
  },[appSize, multi]);

  

  return (
    <div className={`flex flex-col ${title?'':'mb-4'}`}>
        {!title && <p className='text-[16px] text-black mt-5 mb-5'>Size</p>}
        <div className='flex flex-wrap px-2'>
            {sizes?.map((item,index)=> {
              return (
                <div key={index} className='flex flex-col mr-2'>
                  <div className='w-[50px] border text-center mb-4 rounded-lg mr-4 cursor-pointer
                   hover:scale-110 bg-white border-gray-500 text-gray-500' style={appSize?.includes(item)?{
                    background:'black',
                    color:'white'
                   }:{}} onClick={()=> onClickDiv(item)}>{item}</div>
                  
                  </div>
              )
            })}
        </div>
    </div>
  )
}

export default Size