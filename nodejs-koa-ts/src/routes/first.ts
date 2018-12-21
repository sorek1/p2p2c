import * as Koa from "koa";
import { Context } from "koa";

import { createApp } from "../common";

async function main(ctx: Context, next: Function) {
  ctx.status = 200;
  ctx.body = {
    method: ctx.method,
    body: ctx.request.body,
    description: "First route!"
  };
}

export default createApp((app: Koa) => {
  app.use(main);
});
