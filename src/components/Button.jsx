// import React from 'react'

export default function Button(prop) {
  return (
    <div className="">
      <button type="button" id={prop.name} className={` bg-blue-500 disabled:bg-blue-300 cursor-pointer p-2 text-white btn-primary text-sm sm:text-base sm:mx-1 sm:my-3 my-2 hover:scale-105 hover:bg-blue-600 font-semibold w-full sm:w-fit rounded-lg ${prop.className} `} onClick={prop.function} disabled={prop.disabled}>{prop.name}</button>
    </div>
  )
}
