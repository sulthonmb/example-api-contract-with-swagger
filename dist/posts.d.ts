import { z } from "zod";
export type Post = {
    id: string;
    title: string;
    body: string;
};
export declare const PostSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>;
export declare const postApi: {
    createPost: {
        body: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email: string;
        }, {
            name: string;
            email: string;
        }>;
        summary: "Create a post";
        method: "POST";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
        };
        path: "/posts";
    };
    getPost: {
        summary: "Get a post by id";
        method: "GET";
        responses: {
            200: z.ZodNullable<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        };
        path: "/posts/:id";
        headers: z.ZodObject<{
            Authorization: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            Authorization: string;
        }, {
            Authorization: string;
        }>;
    };
};
