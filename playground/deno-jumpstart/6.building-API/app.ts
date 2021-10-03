import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });

router
  .get("/", async (context) => {
    console.log("request made");
    //   context.response.body = "Hello ninjas!";
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/playground/deno-jumpstart/6.building-API/public`,
      index: "index.html",
    });
  })

  // Static content
  // https://stackoverflow.com/questions/66406346/how-to-serve-css-using-oak
  .get("/static/:path+", async (ctx) => {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/playground/deno-jumpstart/6.building-API/public`,
    });
  });

app.use(router.routes());
app.use(router.allowedMethods());

// listen to port
await app.listen({ port: 3000 });
