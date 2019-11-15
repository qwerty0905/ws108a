const Koa = require('koa');

const app = module.exports = new Koa();

app.use(async function pageNotFound(ctx) {
  // 404 = 找不到,200 = 成功
  ctx.status = 404
});

if (!module.parent) app.listen(3000);
