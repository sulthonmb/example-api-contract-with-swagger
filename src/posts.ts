import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export type Post = {
  id: string;
  title: string;
  body: string;
};

export const PostSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

export const postApi = c.router({
  createPost: {
    method: "POST",
    path: "/posts",
    responses: {
      201: PostSchema,
    },
    body: z.object({
      name: z.string(),
      email: z.string(),
    }),
    summary: "Create a post",
  },
  getPost: {
    method: "GET",
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: "Get a post by id",
  },
});
