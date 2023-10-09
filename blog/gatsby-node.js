/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) =>
{
  const { createPage } = actions
  
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  
  result.data.allContentfulBlogPost.edges.forEach((edge) =>
    createPage({
      path: edge.node.slug,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug
      },
      defer: true
    })
  );
}
