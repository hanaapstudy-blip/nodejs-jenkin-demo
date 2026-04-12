const http=require('http')
http.createServer((req,res)=>{
    res.end("hello Jenkins CI/CD")
}).listen(3000)