module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-statamic`,
        options: {
          baseUrl: `http://statamic-gatsby.test:81`,
          collections: [`posts`],
        },
      },
    ],
  };