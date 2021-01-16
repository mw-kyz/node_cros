// var http = require('http');
// // 创建http服务
// var server = http.createServer(function (req, res) {
//     var sreq = http.request({
//         host: '127.0.0.1', // 目标主机
//         post: 3001,
//         path: '/', // 目标路径
//         method: 'GET' // 请求方式
//     }, function(sres){
//         sres.pipe(res);
//         sres.on('end', function(){
//             console.log('done');
//         });
//     });
//     if (/POST|PUT/i.test(req.method)) {
//         req.pipe(sreq);
//     } else {
//         sreq.end();
//     }
// });
// // 访问127.0.0.1:3001查看效果
// server.listen(3001);
// console.log('server started on 127.0.0.1:3001');
//导入readline
let readline = require('readline');
//实例化接口对象
let r1 = readline.createInterface({
  output: process.stdout,
  input: process.stdin
})

//设置r1，提问事件
r1.question('今晚吃啥？', (answer) => {
  console.log('答复：' + answer)
  r1.close()
})

r1.on('close', () => {
  process.exit(0)
})