import { createRouter } from "./context";
import { z } from "zod";

export const fbAccsRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.fbAcc.findMany();
    },
  })
  .mutation("add", {
    input: z
    .object({
      email: z.string(),
      password: z.string(),      
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.fbAcc.create({data: {...input}});
    },
  });
