const http = require('http')

const port = 8080

const server = http.createServer((req,res)=>{
  console.log(req.headers);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`)

  var options = {
    port: 8080,
    host: '127.0.0.1',
  }; 
  
  var request = http.request(options);
  
  request.setHeader('Cookie', ['type=ninja', 'language=javascript']);
  

  request.end();
})

setTimeout(()=>{
  server.close()
},2000)