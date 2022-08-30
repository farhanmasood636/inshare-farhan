const router = require("express").Router();
const File = require("../models/File");

router.get("/:uuid", async (req, res) => {
  // Extract link and get file from storage send download stream
  const file = await File.findOne({ uuid: req.params.uuid });
  // Link expired
  if (!file) {
    return res.render("../views/download", { error: "Link has been expired." });
  }
  const filePath = `&{__dirname}/../${file.path}`;
  res.download(filePath);
});

module.exports = router;