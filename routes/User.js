const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllLogs);

router.get("/new", userController.newLogPage);

router.post("/", userController.createNewLog);

router.get("/:id", userController.findLog);

router.get("/:id/edit", userController.editLog);

router.put("/:id", userController.updateLog);

router.delete("/:id", userController.deleteLog);

module.exports = router;
