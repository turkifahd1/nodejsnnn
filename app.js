const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true}))
const User=require("./Model/CustomerrShema")//استخدام الموديل
app.set('view engine','ejs')//استخدام ejs
app.use(express.static('public'))
var moment = require('moment');//حق الوقت
var methodOverride = require('method-override')//  حق الحذف والتعديل
app.use(methodOverride('_method'))//حق الحذف والتعديل



//Get request
// هنا هاذي المسارات اذا دخلت المسار ذا اعرض لي الصفحه ذي
app.get('/',  (req, res) => {
  
User.find()
.then((resart)=>{ res.render("index",{arr:resart,moment:moment})})
.catch((err)=>{console.log(err)})

})


app.get('/add/add.html',  (req, res) => {
  
   res.render("user/add")
})



app.get('/edit/:id',  (req, res) => {
  
  User.findById(req.params.id)
  .then((result)=>{res.render("user/edit",{obj:result,moment:moment})})
  .catch((err)=> {console.log(err)})
 
})

app.get('/user/:id',  (req, res) => {
  
  User.findById(req.params.id)
  .then((result)=>{res.render("user/view",{obj:result,moment:moment})})
  .catch((err)=> {console.log(err)})
   
   })
 


//Post request

app.post('/user/add.html',  (req, res) => {

 const users= new User(req.body)
       
 users.save()
 .then(() => {res.redirect("/")})
 .catch((err) => {console.log(err)})
 

})


//Delet request
app.delete('/edit/:id',  (req, res) => {

  User.findByIdAndDelete(req.params.id,console.log(req.body))
  .then(() => {res.redirect('/')})
  .catch((err) => {console.log(err)})
 
 })


 //Put request
app.put('/edit/:id',(req, res) => {

   User.findByIdAndUpdate(req.params.id,req.body)
   .then(() => {res.redirect('/')})
   .catch((err) => {console.log(err)})
   
 })


 


mongoose.connect('mongodb+srv://turki:ePtWHLTVGCQfPrAE@cluster0.uircrpz.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    })

  })
  .catch((err) => {
    console.log(err)
  });


















  
///////////////////////////////////////////////////////////////
  // app.post('/', (req, res) => {
  //  console.log(req.body)
   
  //  const Mydatadata= new Mydata(req.body)
   
  //  Mydatadata.save()
  //  .then(() => {
    
  //  res.redirect("/index.html")/// هاذي بعد ماينفذ لك الطلب ينقلك للصفحه ذي
   
  //  })
  // .catch((err) => {
  //      console.log(err)
  // })

  // })
//////////////////////////////////////////////////////////////////////////////



// const express =require("express")
// const app =express()
// const mongoose=require("mongoose")
// app.use(express.urlencoded({extended:true}))
// const mydatass =require("./Model/mydataSchema")
// app.set("view engine","ejs")


// app.get(("/") , (req,res) => {
//   mydatass.find()
//   .then((resert) => {res.render('home',{arr:resert})})
//   .catch((err)=>{console.log(err)})
  

// })


// app.get(("/kk") ,async (req,res) => {
//   await res.send("تم توصيل بلنجاح")

// })

// mongoose.connect('mongodb+srv://turki:ePtWHLTVGCQfPrAE@cluster0.uircrpz.mongodb.net/all-datass?retryWrites=true&w=majority&appName=Cluster0')
// .then(()=>{
//   app.listen((3000),() => {
//     console.log("fff")
  
//   })
// })
// .catch((err)=> {
//   console.log(err)
// })
// app.post('/',  (req, res) => {
//   console.log(req.body)
//   const ss=new mydatass(req.body)
//   ss.save()
//   .then(() => {
//     res.redirect('/kk')
//   })
//   .catch((err) => {
//      console.log(err)
//   })
  
// })



