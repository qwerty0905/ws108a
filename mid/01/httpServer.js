const http = require('http');//宣告或引用套件

const port = 3000, hostname = 'localhost'//宣告字串

const server = http.createServer((request, response) => {
  console.log('url:', request.url);
  console.log('  method:', request.method);
  console.log('  headers', request.headers);
  response.statusCode = 200;//回應碼200表示成功
  //response.statusCode不是函數
  response.setHeader('Content-Type', 'text/plain');
  //設定標頭
  response.write('Hello World\n');//內容
  response.end()//表示主程式結束
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});