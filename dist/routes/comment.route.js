"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const router = express_1.Router();
router.post("/comment", comment_controller_1.createComment);
router.get("/comments", comment_controller_1.getAllComments);
exports.default = router;
//# sourceMappingURL=comment.route.js.map