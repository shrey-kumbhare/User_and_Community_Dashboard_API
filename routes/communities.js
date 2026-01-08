const express = require("express");
const router = express.Router();
const { communities } = require("../data/communities");
const { users } = require("../data/users");

router.get("/:id", (req, res) => {
  const community = communities.find((c) => c.id === parseInt(req.params.id));

  if (!community) {
    return res.status(404).json({ error: "Community not found" });
  }

  const memberDetails = users.filter((u) => community.members.includes(u.id));
  res.status(200).json({ ...community, members: memberDetails });
});

module.exports = router;
