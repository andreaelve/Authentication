"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/", (req, res, next) => {
    try {
        res.sendFile("index.html");
    }
    catch (error) {
        next(error);
    }
});
app.get("/*", (req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
