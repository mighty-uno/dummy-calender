module.exports = {
  apps: [
    {
      name: "dummy-calender",
      script: "./server/index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
