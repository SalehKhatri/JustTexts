// import React from 'react'

export default function Button(prop) {
  return (
    <div className="">
      <button type="button" id={prop.name} className="btn btn-primary mx-1 my-3" onClick={prop.function} disabled={prop.disabled}>{prop.name}</button>
    </div>
  )
}
