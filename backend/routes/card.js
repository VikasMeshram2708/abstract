const express = require("express");

const postController = require("../controllers/Post.controller");
const readController = require("../controllers/Read.controller");
const { ZodError } = require("zod");
const readSingleController = require("../controllers/ReadSingle.controller");

const router = express.Router();

router.post("/create", postController);

router.get("/read", readController);

router.get("/read/:title", readSingleController);

module.exports = router;
