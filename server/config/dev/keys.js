module.exports = {
  PORT: 5556,
  MONGODB: {
    uri: "mongodb://localhost:27017/events",
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      auto_reconnect: true,
      useUnifiedTopology: true,
      keepAlive: true,
    },
  },
};
