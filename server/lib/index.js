"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./Routes/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.use("/api", _index2.default);

app.listen(3000, function () {
    console.log('Application listening on port 3000');
});