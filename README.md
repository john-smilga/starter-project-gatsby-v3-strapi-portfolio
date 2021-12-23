# Gatsby-Strapi Portfolio Starter

## Setup Notes

1. Used Hello World Starter (all packages included)
    check gatsby-config.js example :
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
    `gatsby-source-filesystem`
    `gatsby-plugin-react-helmet`
2. All components ready to go (including imports)
3. main.css - all styles ready to go
4. No font plugin
5. React-icons
6. Limit amount of components - better overview
7. Use constants to avoid repetition
    in the constants folder example : constants/links.js ect.
8. Favicon in Static -> from <https://favicon.io/>
9. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        
        // Older Plugin Version 0.0.12 (used in the starter)
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        // New Plugin Version 1+ (npm install gatsby-source-strapi@latest)
        // collectionTypes: [`jobs`, `projects`, `blogs`, ],

        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```

## 24/10/2021

----------
To run the project

```shell
npm install
npm start

```

## add global layout

use gatsby-browser.js , and add it to wrapPageElement
<https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/>

## for SVG images

use <https://undraw.co/>

## Adding strapi plugin

gatsby-source-strapi
