const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Server is running successfully" });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
