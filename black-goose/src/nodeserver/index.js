const express = require('express');//一个node.js后端框架，类似koa
const app = express();

const https = require('https');
// 获取服务器地址，如果是线上就是服务器ip
const os = require('os');
///////////////////获取本机ip///////////////////////
function getIPAdress(os) {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
const IPv4 = getIPAdress(os)
//启动服务，3003端口号nodes
app.listen(3003, () => console.log('服务：http://localhost:3003;本机ip' + IPv4));

// 解决跨域可以使用中间件cors
// const cors = require('cors');
// app.use(cors())

// 使用中间件可以获取到post-body里的数据
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true })) // 表单请求
app.use(bodyParser.json()) // json请求--post

// 手动设置跨域
app.all('*', function (req, res, next) { // 设置跨域白名单 可以使用cors模块，这里没使用
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    // next();
    // 这里的*表示，不拦截，可以相应所有地址的请求
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        // res.send(200)
        res.sendStatus(200)
    } else {
        // 必须有next才能到下一个请求
        next()
    }
});
// get用query,post用params
// 拦截get请求
app.get('/', (req, res) => {
    console.log(req.query)
    console.log(res)
    // res.json({
    //     name: req.query.name ? req.query : '匿名',
    //     age: '3'
    // })
    res.json({
        ip: IPv4,
        token: 'ip+date+md5value'
    })
})
// post请求需要额外的处理
app.post("*", (req, res) => {
    // req.path请求的地址
    const data = require("./json/index.json");
    switch (req.path) {
        case "/login":
            // Object.keys(req.body).length ? res.json(data) : res.json(req.body);

            if (req.body.username && req.body.password) {
                res.json(data);
            } else {
                res.json({
                    type: "err"
                });
            }

            break;
        default:
            res.json("404");
    }
});
// 请求最新消息
app.get('/zhihu', (req, respoens) => {
    // console.log(req.query.page)
    var page = req.query.page ? req.query.page : 4
    https.get('https://news-at.zhihu.com/api/' + page + '/news/latest', (res) => {
        //console.log('状态码:', res.statusCode);
        //console.log('请求头:', res.headers);
        res.on('data', (d) => {
            // process.stdout.write(d);// 打印到控制台
            // console.log(typeof process.stdout.write(d))
            let data = d.toString('utf-8');
            respoens.json(JSON.parse(data))
        });
    }).on('error', (e) => {
        console.error('错误：', e);
    });
})
// 根据消息的id获取消息的详细信息
app.get("/ditail", (req, respoens) => {
    https.get("https://news-at.zhihu.com/api/4/news/" + req.query.id, res => {
        res.on("data", d => {
            let data = d.toString("utf-8");
            respoens.send(data);
        });
    }).on("error", e => {
        console.error("错误：", e);
    });
});
