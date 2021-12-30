import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({attributes,index }) => {
  console.log(attributes)
  
  return <article className="project">
    <GatsbyImage image={getImage(attributes.image.data.attributes.localFile)}
    className="project-img" alt="{attributes.title}"/>
    <div className="project-info">
      <span className="project-number">0{index +1}.</span>
      <Link to={`/projects/${attributes.slug}`} className="project-slug">
        <h3>{attributes.title}</h3>
      </Link>
      <p className="project-desc">{attributes.description}</p>
      <div className="project-stack">
        {attributes.stack.map(item=>{
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={attributes.github}>
          <FaGithubSquare className="project-icon"></FaGithubSquare>
        </a>
        <a href={attributes.url}>
          <FaShareSquare className="project-icon"></FaShareSquare>
        </a>
      </div>
    </div>

  </article>
}

export default Project
