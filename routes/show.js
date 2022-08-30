const router = require("express").Router();
const File = require("../models/File");

router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    // Link expired
    if (!file) {
      return res.render("../views/download", {
        error: "Link has been expired.",
      });
    }
    const link = (process.env.APP_BASE_URL + "/" + file.uuid).replace(
      "undefined",
      "download"
    );

    return res.render("../views/download", {
      uuid: file.uuid,
      fileName: file.filename,
      fileSize: file.size,
      downloadLink: link,
    });
  } catch (err) {
    return res.render("../views/download", { error: "Something went wrong." });
  }
});

module.exports = router;
