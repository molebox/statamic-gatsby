module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-statamic`,
        options: {
          baseUrl: `http://statamic-gatsby.test:81/`,
          collections: [`posts`],
        },
      },
      'gatsby-transformer-json',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: 'data',
            name: 'data'
          },
      },
    ],
  };