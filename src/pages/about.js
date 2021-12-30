import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
const About = ({ data }) => {
  const aboutdata = data.strapiAbout.data.attributes
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={aboutdata.image.data.attributes.localFile.publicURL}
            alt={aboutdata.title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={aboutdata.title} />
            <p>{aboutdata.info}</p>
            <div className="about-stack">
              {aboutdata.stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
export const query = graphql`
  {
    strapiAbout {
      data {
        attributes {
          title
          info
          stack {
            id
            title
          }
          image {
            data {
              attributes {
                url
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`
export default About
