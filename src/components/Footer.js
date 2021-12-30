import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>copyright &copy; {new Date().getFullYear()}</h4>
        <span>ProductBuilder</span> all rights reserved.
      </div>
    </footer>
  )
}

export default Footer
