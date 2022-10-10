function demo1(task){
    task()
    console.log("this is the first method")

}
function demo2(){
    console.log("this is the second method")

}
demo1(demo2)