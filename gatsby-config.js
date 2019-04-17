module.exports = {
  siteMetadata: {
    title: `Lumini`,
    description: `Theoretical science research for advanced technologies. We are developing foundational technologies, applying new thinking for near-future applications.`,
    author: `@nilsforsblom`,
    authorId: `14014932`, // http://gettwitterid.com/?user_name=nilsforsblom
    siteUrl: `http://lumini.me`, // no trailing slash && must be http!
    socialMediaCard: `lumini-card.jpg` // must be jpg!
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lumini`,
        short_name: `lumini`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
