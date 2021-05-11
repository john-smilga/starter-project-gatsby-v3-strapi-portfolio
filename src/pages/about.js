import React from 'react';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Seo from '../components/Seo';

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data;

  return (
    <>
      <Seo title="About" />
      <section>
        <div className="section-center about-center">
          {/* <img src={image.publicURL} alt={title} className="about-img-svg" /> */}
          <img src={image.publicURL} alt={title} className="img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  {
    strapiAbout {
      info
      title
      stack {
        id
        title
      }
      image {
        publicURL
      }
    }
  }
`;

export default About;
