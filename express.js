
var express=require('express');
var fs=require('fs')
var app=express();
var body=require('body-parser')
var bodyparse=body.urlencoded({extended:false})
app.set("view engine","ejs");
var messagetest;
var impor=require('./router')
app.use('/assets',express.static('assets'))
app.use('/example',express.static('example'))
app.get('/shopping',function(req,res){
    res.sendFile(__dirname+"/"+"shopping.html");

})
app.get('/upload',function(req,res){
    res.sendFile(__dirname+"/"+"test.html");

})
app.post('/data',bodyparse,(req,res)=>{
res.write('<h1>'+req.body.image+'</h1>')
res.write('<h1>'+req.body.pname+'</h1>')
res.write('<h1>'+req.body.tname+'</h1>')
res.write('<h1>'+req.body.size+'</h1>')
res.write('<h1>'+req.body.sex+'</h1>')
})
var obj ={
    table:[]
}
obj.table.push({
    id:1,
    value:25
});
var json=JSON.stringify(obj);
fs.writeFile("data.json",json,(err,f)=>{
    if(err){
        console.log(err);
    }
})


fs.readFile("data.json",(err,data)=>{
obj=JSON.parse(data);
obj.table.push({id:2,value:8});
json=JSON.stringify(obj)
fs.writeFile("data.json",json,(err,d)=>{
if(err){
    console.log("error");
}

})
})


  
    
console.log("hiiii");


app.get('/main',function(req,res){
  fs.readFile('data.json',(err,data)=>{
      if(err){
          console.log();
      }
    res.render("viewmore",{'datas':JSON.parse(data)});

  })
    

});



// var test=child.fork("viewmore.js",messagetest,{cwd:"./assets"});
// test.on("exit",()=>{
//     console.log("ok");
// })
app.listen(8080);