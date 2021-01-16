//引入express模块
const express = require('express');
// 引入superagent模块
const superagent = require('superagent');

const app = express();

app.all('*', (req,res,next) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin','*');
    //允许的header类型
    res.header('Access-Control-Allow-Headers','content-type');
    //设置content-type类型
    // res.header('content-type', 'image/jpeg')
    //跨域允许的请求方式 
    res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
    next();
})
//这样也可以
// app.use((req,res,next) => {
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header('Access-Control-Allow-Origin','*');
//     //允许的header类型
//     res.header('Access-Control-Allow-Headers','content-type');
//     //设置content-type类型
//     res.header('content-type', 'image/jpeg')
//     //跨域允许的请求方式 
//     res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
//     next();
// })

app.get('/test', function (request, response) {
    //也可以单独在这设置content-type
    // response.header('content-type', 'image/jpeg')
    // 获取图片
    const sreq = superagent.get('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605364766087&di=c614f2f91c28e3c487eaddaa6b44dca2&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201408%2F07%2F213601f2xz7usscm2z1mjh.jpg');

    //将获取到的图片文件流写入response
    sreq.pipe(response);

    sreq.on('end', function(){
        console.log('done');
    });
});

//设置端口号
app.listen(3001);
console.log('Express started on 127.0.0.1:3001');