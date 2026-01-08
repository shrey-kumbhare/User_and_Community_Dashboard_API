const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const userRoutes = require("./routes/users");
const communityRoutes = require("./routes/communities");

app.get("/", (req, res) => {
  res.status(200).send({ message: "Server is running successfully" });
});

app.use("/users", userRoutes);
app.use("/communities", communityRoutes);

app.use((req, res) => {
  res
    .status(404)
    .send({
      error: "Not Found",
      message: `The requested endpoint was not found on this server.`,
    });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
