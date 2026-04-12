const http=require('http')
const  server=http.createServer((req,res)=>{
    res.end("hello Jenkins CI/CD")
})
// .listen(3000,()=>{
//     console.log('server is running on http://localhost:3000"')

// })
server.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
    setTimeout(()=>{
        console.log('stopping server....')
        process.exit(0)},2000)
    })

