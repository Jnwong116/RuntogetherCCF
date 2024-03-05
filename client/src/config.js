const port = 3000;

const google_client_id = process.env.GOOGLE_CLIENT_ID;
console.log(google_client_id)

const dev = {
  port,
  api_host: `http://localhost:${port}`,
  google_client_id: google_client_id,
};

const prod = {
  api_host: "https://runtogetherccf-8qe6.onrender.com",
  google_client_id: google_client_id,
};

module.exports = prod;
