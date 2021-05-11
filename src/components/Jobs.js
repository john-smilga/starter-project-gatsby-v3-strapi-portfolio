import React from 'react';
import Title from './Title';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const query = graphql`
  {
    allStrapiJob(sort: { fields: id, order: DESC }) {
      nodes {
        company
        date
        location
        desc {
          id
          text
        }
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJob: { nodes: jobs },
  } = data;
  const [value, setValue] = React.useState(0);
  const { company, position, date, location, desc } = jobs[value];
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? 'job-btn active-btn' : 'job-btn'}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          <p>{location}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.text}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Jobs;
