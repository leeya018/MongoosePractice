"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var UserSchema = new Schema({
    name: String,
    pass: String,
    age: Number
});
var User = model('User', UserSchema);
exports.User = User;
//# sourceMappingURL=User.js.map