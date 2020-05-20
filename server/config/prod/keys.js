module.exports = {
  PORT: 5556,
  MONGODB: {
    uri:
      "mongodb+srv://pizzaBoy:TskqsTya4CqccksV@cluster0-jbgar.mongodb.net/event?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      auto_reconnect: true,
      useUnifiedTopology: true,
      keepAlive: true,
    },
  },
};
