import * as Koa from "koa";
import * as logger from "koa-logger";
import * as bodyParser from "koa-bodyparser";
import { Context } from "koa";

export function createApp(main: (app: Koa) => any) {
  const app = new Koa();

  app.use(logger());
  app.use(bodyParser());
  app.use(async (ctx: Context, next: Function) => {
    ctx.res.statusCode = 200;
    try {
      await next();
    } catch (err) {
      console.error(err);
      throw err;
    }
  });

  main(app);

  return app.callback();
}
