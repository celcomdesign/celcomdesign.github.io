const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ actions, graphql }) => {
  const articleTemplate = path.resolve(`src/templates/article.js`)
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allArticlesJson {
        nodes {
          data {
            attributes {
              slug
              header {
                title
              }
            }
          }
        }
      }
    }
  `)
  data.allArticlesJson.nodes.forEach(node => {
    const slug = node.data.attributes.slug
    
    createPage({
      path: `article/${slug}`,
      component: articleTemplate,
      context: {
        title: node.data.attributes.header.title,
        slug: slug
      }
    })
  })
}
