//引入express
var express = require('express')
//引入request模块
var request = require('request');
//利用express()函数创建本地服务
var app = express()

app.get('/query', function (req, res) {
    //跨域请求处理
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    //接收前端传递过来的参数
    var type = req.query.type;
    var postid = req.query.postid;
    console.log(type+postid);
    //通过request模块访问接口
    request('http://www.kuaidi100.com/query?type='+type+'&postid='+postid+'', function (error, response, body) {
        //把返回内容发送到前端
        res.status(200).send(body)
    });
})

//监听3000端口
app.listen(3000)