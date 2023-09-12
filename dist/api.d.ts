export declare const rootApi: {
    posts: {
        createPost: {
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                email: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                email: string;
            }, {
                name: string;
                email: string;
            }>;
            summary: "Create a post";
            method: "POST";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>;
            };
            path: "/posts";
            headers: import("zod").ZodObject<{
                Authorization: import("zod").ZodAny;
            }, "strip", import("zod").ZodTypeAny, {
                Authorization?: any;
            }, {
                Authorization?: any;
            }>;
        };
        getPost: {
            summary: "Get a post by id";
            method: "GET";
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    name: string;
                }, {
                    id: number;
                    name: string;
                }>>;
            };
            path: "/posts/:id";
            headers: import("zod").ZodObject<{
                Authorization: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                Authorization: string;
            }, {
                Authorization: string;
            }>;
        };
    };
};
