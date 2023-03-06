const port = 5001;

const dev = {
  port,
  api_host: `http://localhost:${port}`,
};

const prod = {
  api_host: "https://runtogetherccf.herokuapp.com/",
};

module.exports = prod;
