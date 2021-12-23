import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob {
      nodes {
        data {
          attributes {
            company
            date
            position
            description {
              id
              text
            }
          }
        }
      }
    }
  }
`
const Jobs = () => {
  const jobsdata = useStaticQuery(query)
  console.log(jobsdata)
  const jobs = jobsdata.allStrapiJob.nodes[0].data
  const [value, setValue] = React.useState(0)
  const data = jobsdata.allStrapiJob.nodes[0].data[value].attributes

  console.log(data)
  const { company, position, date, description } = data
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.attributes.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.text}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
