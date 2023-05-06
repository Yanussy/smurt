const express = require("express");

const app = express();
app.use(express.static("public"));
var cors = require("cors");
app.use(cors());
var prezident = "mmmmmmmmm";

app.get("/prezident", (req, res) => {
  res.send({ text: prezident });
});

app.post("/setprezident/:m", (req, res) => {
  prezident = req.params.m;
  res.send({});
});

// app.get("/:lukanka", (req, res) => {
//   console.log(req.params.lukanka);
//   ee = req.params.lukanka;
//   res.sendFile(__dirname + `/${req.params.lukanka}`);
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
//html buton s forma i neshta i razberi
