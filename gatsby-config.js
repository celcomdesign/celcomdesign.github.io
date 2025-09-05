/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Celcom Design`,
    siteUrl: `https://celcomdesign.gitlab.io`,
    description: `Celcom Design is a cooperative effort led by a group of designers, writers, and developers at Celcom.`,
    author: `Celcom Design`
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`
      },
      __key: "articles"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp"
  ]
}