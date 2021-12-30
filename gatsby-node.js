const path = require("path") 
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`  
  query GetProjects {
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
                    publicURL
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
  `)

  result.data.allStrapiProject.nodes.forEach(project => {
    project.data.forEach(projectdata => {
      const projectSlug = projectdata.attributes.slug
      createPage({
        path: `/projects/${projectSlug}`,
        component: path.resolve(`src/templates/projects/project-template.js`),
        context: {
          project: projectdata,
        },
      })
    })
  })
}
