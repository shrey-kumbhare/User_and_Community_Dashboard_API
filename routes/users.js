const express = require("express");
const router = express.Router();
const { users } = require("../data/users");

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.post("/", (req, res) => {
  const { name, role } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!role) {
    return res.status(400).json({ error: "Role is required" });
  }
  const newUser = {
    id: users.length + 1,
    name,
    role,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
