"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const movies_route_1 = __importDefault(require("./routes/movies.route"));
const comment_route_1 = __importDefault(require("./routes/comment.route"));
const character_route_1 = __importDefault(require("./routes/character.route"));
const handle_errors_1 = __importDefault(require("./helpers/handle-errors"));
const swaggerDoc = require("../swagger.json");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use("/api/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc));
app.use("/api/v1/", movies_route_1.default);
app.use("/api/v1/", comment_route_1.default);
app.use("/api/v1/", character_route_1.default);
app.use("*", (req, res) => {
    res.redirect("/api/docs");
});
process.on("uncaughtException", (err) => {
    console.error("There was an uncaught error", err);
    process.exit(1); //mandatory (as per the Node.js docs)
});
app.use(handle_errors_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map