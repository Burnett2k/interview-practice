const express = require("express");
const app = express();
const port = 3000;

const records = { blah: "1.1.1.1" };

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.json(records);
});

let id = 1;
app.post("/", (req, res) => {
  console.log(req.body);
  records[req.body.domain] = req.body.ip;
  res.status(201);
  res.end();
});

app.get("/resolve/:id", (req, res) => {
  console.log(req.params);
  res.send(`should redirect to ${records[req.params.id]}`);
});

app.listen(port, () => {
  console.log("listening");
});
