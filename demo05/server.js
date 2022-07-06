const express = require('express');

const app = express();

app.use((req, res, next) => { // 将 index.html 设为 no-cache
    console.log("🚀 ~ app.use ~ req.url", req.url)
    // if (req.url == '/') {
    //     res.setHeader('Cache-control', 'no-cache')
    // }
    next()
});

app.use(express.static("dist", {
    maxAge: 1000 * 60 * 60 , // maxAge 资源缓存的最大时间，单位ms
})); // 将dist设为根目录

app.listen(3000).on("listening", () => {

    console.log("app.listen ~ listening")
});