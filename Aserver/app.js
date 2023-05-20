const express = require('express')
const app = express()
const http = require('http')


//统一设置响应头
function setHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*") //设置跨域
    res.setHeader("Access-Control-Allow-Credentials", "true")
    return res;
}

app.get('/getbooks', function (request, response) {
    let books = {
        "status": 200,
        "msg": "获取图书列表成功",
        "data": [
            {
                "id": 1,
                "bookname": "西游记",
                "author": "吴承恩",
                "publisher": "北京图书出版社"
            },
            {
                "id": 2,
                "bookname": "红楼梦",
                "author": "曹雪芹",
                "publisher": "上海图书出版社"
            },
            {
                "id": 3,
                "bookname": "三国演义",
                "author": "罗贯中",
                "publisher": "北京图书出版社"
            }
        ]
    }
    response.send(books)
})

app.post("/login", function (req, res) {
    setHeaders(res);
    console.log("loginData", req)
    // let loginData = JSON.parse(req.query)
});


// 监听端口，启动web服务
app.listen(8000, function () {
    console.log('app listening on port 8000!')
})