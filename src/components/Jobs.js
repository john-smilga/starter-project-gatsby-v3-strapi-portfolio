import React from 'react';
import Title from './Title';
import { FaAngleDoubleRight, FaLongArrowAltRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const query = graphql`
  {
    allStrapiJob {
      nodes {
        company
        date
        position
        desc {
          id
          name
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
  const { company, position, date, desc } = jobs[0];
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container"></div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
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
