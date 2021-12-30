import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const projects = data.allStrapiProject.edges[0].node.data 
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(
      filter: {
        data: { elemMatch: { attributes: { featured: { eq: true } } } }
      }
    ) {
      totalCount
      edges {
        node {
          data {
            attributes {
              description
              featured
              github
              url
              slug
              stack {
                id
                title
              }
              title
              image {
                data {
                  attributes {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          layout: CONSTRAINED
                          placeholder: BLURRED
                        )
                      }
                    }
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  }
`
export default IndexPage
