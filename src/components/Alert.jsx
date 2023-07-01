// import React from 'react'

export default function Alert(prop) {
  return (
    <div style={{height:'70px'}}>
{prop.alert&&<div className={`sm:text-md font-semibold text-center alert alert-${prop.alert.type}` } role="alert">
           {prop.alert.message} {/* changing message dynamically */}
</div>}  
</div>
)
}
