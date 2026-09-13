import {z} from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { text } from 'stream/consumers';
export const appRouter = createTRPCRouter({
     hello : baseProcedure
    .input(
        z.object({
            text: z.string()

        }),
    )
    .query((opts)=>{
        return{
            greeting : `hello ${opts.input.text}`
        }
    })
});

export type AppRouter = typeof appRouter;