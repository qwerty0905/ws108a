const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url=', ctx.url)
  ctx.body = 'Hello World';//內文
});

if (!module.parent) app.listen(3000);
