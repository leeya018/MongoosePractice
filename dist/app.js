"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var ships_1 = __importDefault(require("./routers/ships"));
var cars_1 = __importDefault(require("./routers/cars"));
var users_1 = __importDefault(require("./routers/users"));
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var url = 'mongodb://localhost:27017/Dating';
mongoose_1.default.connect(url, { useNewUrlParser: true });
var app = express_1.default();
var jsonParser = body_parser_1.default.json();
app.use(jsonParser);
app.get('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        //   req.logIn(user, function(err) {
        //     if (err) { return next(err); }
        //     return res.redirect('/users/' + user.username);
        //   });
    })(req, res, next);
});
app.use('/ships', ships_1.default);
app.use('/cars', cars_1.default);
app.use('/users', users_1.default);
app.listen(3000);
//# sourceMappingURL=app.js.map