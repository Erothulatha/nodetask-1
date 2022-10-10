const http=require("http")
let data={
"name":"Bhargavi"
}
const server=http.createServer( (req, res) =>{
res.end("Server Running");
res.end("Server Fast")
})
server.listen(8001,(err) => {
if(err){
console.log("error : ", err)
}
else{
console.log('server created sucessfully')
}
});
