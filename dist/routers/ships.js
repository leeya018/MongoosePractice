"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Ship_1 = require("../models/Ship");
var router = express_1.default.Router();
router.get('/', function (req, res) {
    Ship_1.Ship.find().exec().then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
}).post('/', function (req, res) {
    var ship = new Ship_1.Ship({ name: req.body.name, length: req.body.length });
    ship.save().then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
exports.default = router;
//# sourceMappingURL=ships.js.map