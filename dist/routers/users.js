"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var User_1 = require("../models/User");
router.post('/', function (req, res) {
    var user = new User_1.User({ name: req.body.name, pass: req.body.pass, age: req.body.age });
    user.save().then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
router.get('/', function (req, res) {
    User_1.User.find().then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map