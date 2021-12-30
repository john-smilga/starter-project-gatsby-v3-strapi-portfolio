import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects =({projects, title, showLink}) => {
  return <section className="section projects">
    <Title title={title}/>
    <div className="section-center project-center">
      {projects.map((project,index)=>{
        return <Project key={project.id} index={index} {...project}></Project>
      })}
       </div>
      {
        showLink && <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      }

   

  </section>
}

export default Projects
