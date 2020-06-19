const http =require('http');
// 文件系统模块
const fs =require('fs')
const ws =require('socket.io')

// 创建web服务器实例
const server =http.createServer((req,res) => {
    const html =fs.readFileSync('./index.html')
    res.end(html)

});

// 生成在服务器端的接口集合 包括很多独立的接口
const io = ws(server)

// 服务器端监听到客户端连接事件

io.on('connection',socket => {
    // 监听到消息到来
    socket.on('message',msg =>{
       
        io.emit('message',msg)
 
        console.log(msg)
    })
})
server.listen(3000);

