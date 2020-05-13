const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const BLOG_PREFIX = `/blog`;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `content/blog/`,
    });
    createNodeField({
      node,
      name: `slug`,
      value: `${BLOG_PREFIX}${relativeFilePath}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Templates
  const blogList = path.resolve(`./src/templates/BlogList/index.tsx`);
  const blogPost = path.resolve(`./src/templates/BlogPost/index.tsx`);

  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  // Create blog list pages
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);
  const pathPrefix = BLOG_PREFIX;
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? pathPrefix : `${pathPrefix}/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        pathPrefix,
      },
    });
  });

  // Create blog pages
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: {
        slug: node.fields.slug,
        previous,
        next,
      },
    });
  });
};
