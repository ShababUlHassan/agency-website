import React from 'react'

const Counts = ({number,name}) => {
  return (
    <>
        <div className="single-count text-center px-[65px]  ">
          <p className="text-[50px]">{number}</p>
          <p className="text-[16px] font-light uppercase">{name}</p>
        </div>
    </>
  )
}

export default Counts