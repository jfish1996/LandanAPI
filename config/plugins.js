module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
  // ...
});

// module.exports = () => ({
//   graphql: {
//     enabled: true,
//     config: {
//       endpoint: '/graphql',
//       introspection : true,
//       playgroundAlways: true,
//     },
//   },
// });
