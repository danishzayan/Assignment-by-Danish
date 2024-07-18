const { Client } = require("pg");

const client = new Client({
  database: "irctc",
  user: "postgres",
  host: "localhost",
  password: "newpassword",
  port: 5432,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

module.exports = client;
