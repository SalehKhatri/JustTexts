// import React from 'react'

export default function Alert(prop) {
  return (
    <div style={{height:'70px'}}>
{prop.alert&&<div className={`alert alert-${prop.alert.type}`} role="alert">
           {prop.alert.message} {/* changing message dynamically */}
</div>}  
</div>
)
}
