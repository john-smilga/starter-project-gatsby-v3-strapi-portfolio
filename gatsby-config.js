/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Product Builder Portfolio",
    description: "Product Builder portfolio built with Gatsby and Strapi",
    titleTemplate:'%s | ProductBuilder portfolio',
    url:`https://sumith-strapi-portfolio.netlify.app`,
    twitterUsername:'@sumithpdd',
    image:`/mainImg.png`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: `job`,
            api: { qs: { populate: `*` } },
            endpoint: `api/jobs`,
          },
          {
            name: `project`,
            api: { qs: { populate: `*` } },
            endpoint: `api/projects`,
          },
        ],
        singleTypes: [
          {
            name: `about`,
            api: { qs: { populate: `*` } },
            endpoint: `api/about`,
          },
        ],
      },
    },
  ],
}
