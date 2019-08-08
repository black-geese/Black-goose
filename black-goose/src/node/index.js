const express = require('express'); // 一个 node.js 的后端框架,类似 koa
const app = express();
app.listen(3001, () => console.log("端口号3001启动"))
// 跨域
app.all('*', function (req, res, next) { // 设置跨域白名单 可以使用cors模块，这里没使用
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    // next();
    res.header('Access-Control-Allow-Origin', '*');// 这里的*表示不拦截,可以响应所有请求
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        // res.send(200)
        res.sendStatus(200)
    } else {
        // 必须有next方法,才能跳出这个方法,到下一个请求去
        next()
    }
});
// get请求
app.get("/", (req, res) => {
    const data = require("./json/index.json")
    res.json(data)
})