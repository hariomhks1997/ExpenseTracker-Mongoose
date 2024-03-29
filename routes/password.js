const express = require("express");
const controller = require("../controller/password");

const router = express.Router();
router.get("/forgetpasswordform", controller.getformforgetpassword);
router.post("/forget/password", controller.forgetpassword);
router.get("/password/reset/:id", controller.getresetform);
router.post("/password/set", controller.resetpassword);
module.exports=router;