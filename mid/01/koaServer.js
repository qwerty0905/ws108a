const Koa = require('koa');//引用koa,此時為class
const app = module.exports = new Koa();//class需經過物件來使用

app.use(async function(ctx) {
  console.log('url:', ctx.url)
  // console.log('  method:', ctx.method)
  // console.log('  headers:', ctx.headers)
  ctx.type = 'text/html'
  ctx.body = 'Hello World 你好！<a href="http://tw.youtube.com">YouTube</a>';
});

if (!module.parent) {
  app.listen(3000)
  console.log(`Server running at http://localhost:3000/`)
}
