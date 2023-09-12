"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootApi = void 0;
var core_1 = require("@ts-rest/core");
var posts_1 = require("./posts");
var c = (0, core_1.initContract)();
exports.rootApi = c.router({
    posts: posts_1.postApi,
});
