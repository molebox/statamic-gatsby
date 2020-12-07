const path = require(`path`);

// create the pages from the statamic md content
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  // Our blog post layout template. Used to layout all out posts
  const postLayoutTemplate = path.resolve('src/templates/post-layout.js');

  return graphql(`
    {
      allStatamicDataJson {
        edges {
          node {
            content
            image
            slug
            title
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `).then((result) => {
    console.log({result})
    // If we get any errors throw them back at'cha
    if (result.errors) {
      throw result.errors;
    }

    // Grab the posts array
    const posts = result.data.allStatamicDataJson.edges;

    // Loop through the posts and create the post pages
    posts.forEach(({node, next, previous}) => {
      // Create the page using the slug
      createPage({
        path: node.slug,
        component: postLayoutTemplate,
        context: {
          slug: node.slug,
          previous: previous,
          next: next,
        },
      });
    });
  });
};