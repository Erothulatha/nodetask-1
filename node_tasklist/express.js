const express=require('express')

const app=express()
app.use(express.json());
app.get('/',function(req,res){
     res.send("<h1>hello world</h1>")
})
const products=[{
    id:1,
    name:"latha"},
    {
     id:2,
    name:"usha"
    },
    {    
        id:3,
        name:"dilli"
    },
    {
        id:4,
        name:"bharathi"
    }
]
app.get('/products',(req,res)=>{
    res.json(products)
})
app.get('/products/:id',(req,res)=>{
    const newData =products.filter(item=>item.id.toString()===req.params.id)
    return res.json(newData);
}
)
app.post('/addproducts',(req,res)=>{
    const{id,name}=req.body;
    console.log(id,name)
    return res.send("data sucessfully inserted!!");

})
app.put('/updateproducts',(req,res)=>{
    const{id,name}=req.body;
    console.log(name,id)
    return res.send("data sucessfully updated!!");

})
app.delete('/deleteproducts/:id',(req,res)=>{
    
    return res.send("data sucessfully deleted!!");

})


 