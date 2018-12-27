"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var ShipSchema = new Schema({ name: String, length: Number });
var Ship = model('Ship', ShipSchema);
exports.Ship = Ship;
//# sourceMappingURL=Ship.js.map