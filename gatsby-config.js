require('dotenv').config();
const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDesc,
    author: config.siteAuthor,
    logoUrl: config.siteLogoUrl,
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['ethereum-org-website'],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Fauna',
        fieldName: 'fauna',
        url: 'https://graphql.fauna.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.SERVER_KEY}`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
  ],
};
