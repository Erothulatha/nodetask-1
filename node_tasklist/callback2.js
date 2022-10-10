function add(a,b){
    console.log(a+b)
}
function sub(c,d){
    console.log(c-d)
}
function calculator(var1,var2,operation){
operation(var1,var2)
}
calculator(4,5,add)
calculator(40,5,sub)
