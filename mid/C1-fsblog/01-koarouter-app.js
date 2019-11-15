const Koa = require('koa')//伺服器
const KoaRouter = require('koa-router')//路徑
const koaLogger = require('koa-logger')//列印出回傳值
//:<-- GET /
//--> GET / 404 9ms -
//<-- GET /aaa/bbb
//--> GET /aaa/bbb 404 2ms -

const app = new Koa()
const router = new KoaRouter()

router.get('/blog/:file', async (ctx) => {
  ctx.body = 'file:' + ctx.params.file
})

app.use(koaLogger()) // 使用 koa-logger 紀錄那些網址曾經被訪問過
app.use(router.routes()) // 使用 koa-router 路由
app.listen(3000) // 啟動 Server
console.log('server run at http://localhost:3000/')
