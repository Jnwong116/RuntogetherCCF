const port = 3000;

const dev = {
  port,
  api_host: `http://localhost:${port}`,
  google_client_id: "858566898033-jau549hlkcrroj0fhgg0upj53anhbcde.apps.googleusercontent.com",
};

const prod = {
  api_host: "https://runtogetherccf.herokuapp.com",
  google_client_id: "858566898033-jau549hlkcrroj0fhgg0upj53anhbcde.apps.googleusercontent.com",
};

module.exports = dev;
