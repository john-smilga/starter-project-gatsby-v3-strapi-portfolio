import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Project from "../components/Project"
import data from "../constants/social_links"
const ProjectsPage = ({data }) => {
  const projects = data.allStrapiProject.nodes[0].data
  return (
    <>
    <main>
<section className="projects=page">
  <Projects title="all projects" projects={projects}/>
</section>

    </main>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProject {
      nodes {
        data {
          id
          attributes {
            description
            featured
            github
            slug
            title
            url
            stack {
              id
              title
            }
            image {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default ProjectsPage
