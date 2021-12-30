import React from "react"
import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext }) => {
  return (
    <>
    <Seo title={pageContext.project.attributes.title.toUpperCase()}
    description={pageContext.project.attributes.description} 
    image ={pageContext.project.attributes.image.data.attributes.localFile.publicURL} />
     <main className="project-template-page">
      <h4>{pageContext.project.attributes.title}</h4>
      <p>{pageContext.project.attributes.description}</p>
    </main>
    </>
   
  )
}

export default ProjectTemplate
