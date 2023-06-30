
// import React from 'react'

// The navbar is from bootstrap
export default function Navbar(prop) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-opacity-75">
    <div className="container-fluid">
      <a className="navbar-brand" href=".">{prop.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  </>
  )
}