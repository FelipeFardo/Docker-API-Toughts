const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "toughts",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database");
  }
});

app.get("/toughts", async (req, res) => {
  const { title, actor } = req.query;
  let sql = "SELECT * FROM toughts";

  if (title) {
    sql += ` WHERE title = ${title}`;
  }

  if (actor) {
    sql += ` WHERE  ${title}`;
  }
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving toughts");
    } else {
      res.send(results);
    }
  });
});

app.post("/tought", (req, res) => {
  const toughtReq = req.body;

  const tought = {
    id: toughtReq.id,
    title: toughtReq.title,
    actor: toughtReq.actor,
  };

  connection.query("INSERT INTO toughts SET ?", tought, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting tought");
    } else {
      res.status(200).send("Tought registered successfully");
    }
  });
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

process.on("SIGINT", () => {
  console.log("Stopping server...");
  connection.end((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    server.close(() => {
      console.log("Server stopped");
      process.exit(0);
    });
  });
});
