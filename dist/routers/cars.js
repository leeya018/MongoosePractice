"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var express_1 = __importDefault(require("express"));
var Car_1 = require("../models/Car");
var router = express_1.default.Router();
router.get('/', function (req, res) {
    Car_1.Car.find(req.query).
        exec().
        then(function (result) {
        if (!result) {
            res.status(404).json({ messsage: 'Item not found' });
        }
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
router.post('/', function (req, res) {
    var car = new Car_1.Car({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: req.body.name,
        length: req.body.length,
        engine: req.body.engine //this is Object 
    });
    car.save().then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
router.get('/:id', function (req, res) {
    Car_1.Car.findOne({ _id: mongoose_1.default.Types.ObjectId(req.params.id) }).
        exec().
        then(function (result) {
        if (!result) {
            res.status(404).json({ message: 'Item not found' });
        }
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
router.delete('/:id', function (req, res) {
    Car_1.Car.findByIdAndDelete({ _id: req.params.id }).
        exec().
        then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
router.delete('/', function (req, res) {
    Car_1.Car.deleteMany(req.query).
        exec().
        then(function (result) {
        if (!result) {
            res.status(404).json({ messsage: 'Item not found' });
        }
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
//update 1
router.put('/', function (req, res) {
    Car_1.Car.updateOne({ name: "mercedes" }, { $set: req.body }).exec().then(function (result) {
        if (!result) {
            res.json({ message: 'Item not found' });
        }
        res.json(result);
    }).catch(function (err) {
        res.json({ message: err });
    });
});
exports.default = router;
//# sourceMappingURL=cars.js.map