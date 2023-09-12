"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postApi = exports.PostSchema = void 0;
var core_1 = require("@ts-rest/core");
var zod_1 = require("zod");
var c = (0, core_1.initContract)();
exports.PostSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.postApi = c.router({
    createPost: {
        method: "POST",
        path: "/posts",
        headers: zod_1.z.object({
            Authorization: zod_1.z.undefined(),
        }),
        responses: {
            201: exports.PostSchema,
        },
        body: zod_1.z.object({
            name: zod_1.z.string(),
            email: zod_1.z.string(),
        }),
        summary: "Create a post",
    },
    getPost: {
        method: "GET",
        path: "/posts/:id",
        headers: zod_1.z.object({
            Authorization: zod_1.z.string(),
        }),
        responses: {
            200: exports.PostSchema.nullable(),
        },
        summary: "Get a post by id",
    },
});
