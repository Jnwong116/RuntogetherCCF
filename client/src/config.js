const port = 3000;

const dev = {
  port,
  api_host: `http://localhost:${port}`,
  facebokAppID: 732393428529326,
};

const prod = {
  api_host: "https://runtogetherccf.herokuapp.com",
  facebokAppID: 1355204125212638,
};

module.exports = dev;
