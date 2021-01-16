var http = require('http');
// 创建http服务
var server = http.createServer(function (req, res) {
    // 查询本机ip
    var sreq = http.request({
        host: 'timgsa.baidu.com', // 目标主机
        path: '/timg?image&quality=80&size=b9999_10000&sec=1605364766087&di=c614f2f91c28e3c487eaddaa6b44dca2&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201408%2F07%2F213601f2xz7usscm2z1mjh.jpg', // 目标路径
        method: req.method // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});
// 访问127.0.0.1:3001查看效果
server.listen(3001);
console.log('server started on 127.0.0.1:3001');