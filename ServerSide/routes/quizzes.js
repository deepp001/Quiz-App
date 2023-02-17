const express = require("express");
const router = express.Router();
const quizzController = require("../controller/quizzesContoller");

router.post("/", quizzController.addquizz);
router.get("/", quizzController.Allquizz);
router.get("/:id", quizzController.Onequize);
router.post("/checkAns", quizzController.CheckAns);

module.exports = router;
