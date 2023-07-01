// import React from 'react'

export default function Button(prop) {
  return (
    <div className="">
      <button type="button" id={prop.name} className=" bg-blue-500 p-2 text-white btn-primary text-sm sm:text-base sm:mx-1 sm:my-3 my-2 hover:scale-105 font-semibold w-full sm:w-fit rounded-lg " onClick={prop.function} disabled={prop.disabled}>{prop.name}</button>
    </div>
  )
}
