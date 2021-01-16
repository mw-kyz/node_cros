//引入http模块
const http = require('http');
// 引入superagent模块
const superagent = require('superagent');

// 创建http服务
const app = http.createServer(function (req, res) {
  //如果访问地址为http://127.0.0.1:3001/test，再进行以下获取图片的操作
  if(req.url === '/test') {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //允许的header类型
    res.setHeader('Access-Control-Allow-Headers','content-type');
    //设置content-type类型
    res.setHeader('content-type', 'image/jpeg')
    //跨域允许的请求方式 
    res.setHeader('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
    
    // 获取图片
    const sreq = superagent.get('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605364766087&di=c614f2f91c28e3c487eaddaa6b44dca2&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201408%2F07%2F213601f2xz7usscm2z1mjh.jpg');
      
    //将获取到的图片文件流写入response
    sreq.pipe(res);

    sreq.on('end', () => {
        console.log('done');
    });
  }
});

// 设置端口号
app.listen(3001);
console.log('server started on 127.0.0.1:3001');