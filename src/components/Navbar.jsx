
// import React from 'react'

// The navbar is from bootstrap
export default function Navbar(prop) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-opacity-100 container-fluid">
    <div className="container-fluid">
      <a className="navbar-brand" href=".">{prop.title}</a>
    </div>
  </nav>
  </>
  )
}
