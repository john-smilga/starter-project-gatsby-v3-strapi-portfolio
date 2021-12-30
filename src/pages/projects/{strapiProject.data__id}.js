import React from "react"

const ProjectTemplate = ({ pageContext: { attributes:title } ,data}) => {
  return (
    <main className="project-template-page">
      <h4>{title}</h4>
      <p>{data.strapiProject.description}</p>
    </main>
  )
}
  const query = graphql`
  query getSingleProject($title: String = "") {
    strapiProject(data: {elemMatch: {attributes: {title: {eq: $title}}}}) {
      data {
        id
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          description
          title
        }
      }
    }
  }
`


export default ProjectTemplate
