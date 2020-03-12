const express=require('express')
const app=express()
//express实例化

//最简单的api接口
app.get('/user/login',(req,res)=>{
    //接收get参数 query
  console.log(req.query)
  console.log('你好')
  let {us,ps}=req.query
  //处理数据
  if(us==='wangyi'&&ps==456){
    res.send({err:0,msg:'login ok'})
  }else{
    res.send({err:-1,msg:'us pass no ok'})
  }
  
})

app.listen(3000,()=>{
    //监听3000 端口 开启服务器
    console.log('server start')
})

//http://www.baidu.com/user/hehe?us=123&s=123
//http://localhost:3000/user/login
/*
api 接口的构成要素
ip  
port
pathname 语义化
method  get post
接受用户传递数据  数据格式是由后端确定的
*/