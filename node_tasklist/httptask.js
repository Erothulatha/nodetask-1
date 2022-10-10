var http=require('http')

http.createServer((req,res)=>{
    res.write("hello welcome");
    res.end();
    console.log("server start")

  // res.write(req.url);
   //res.end ();
   //console.log("data accesed")

}).listen(8080)