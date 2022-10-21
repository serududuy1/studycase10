const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sosmed",
});

db.connect((err) => {
  err ? console.error(err) : console.log("database bisa diakses");
  //   if (err) throw err;
  //   console.log("database bisa diakses");
});

module.exports = db;
