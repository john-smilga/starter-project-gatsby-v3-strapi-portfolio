import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
    <main className="error-page">
      <div className="error-container">
      <h1>OOPS it's dead end</h1>
      <Link to="/" className="btn">
        back home
      </Link>
      </div>
    </main>
      
    </>
  )
}

export default Error
