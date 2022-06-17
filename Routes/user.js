var express = require("express");
var router = express.Router();

router.get('/angular',function (req,res,next) {
    res.render('index',{title: 'ARC Madhu', subtitle:"XYZ test"});
});
// router.use('/',function (req,res,next) {
//     req.headers["content-type"]='application/json';
//     // res.send('API call received')
//     console.log("API call received")
//     next();
// });
// router.get('/',function (req,res,next) {
//     res.send("Headers Recevived" + req.headers["content-type"]);
//     res.send('API call request for users');
//     // console.log("API call received")
//     next();
// });
// router.use('/',function (req,res) {
//     console.log("API call end")
// });
// /user
// router.get('/',function (req,res) {
//     res.send('get request users data')
// })
// /user/add-users
router.get("/add-users",(req,res)=>{
    res.send("get reuest add users");
});

// /user/edit-user
router.put('/edit-users',(req,res)=>{
    var  dataObj = {
      _id : 09,
      name : "ABC",
      active : true
  }
    res.send(dataObj);
    res.send("get reuest edit users");
});
// /user/delete-user
router.get('/delete-users',(req,res)=>{
    res.send("get reuest users detail");
});

// /users/get-user-details
router.get("/get-user-details/:id",(req,res)=>{
    res.send("get reuest for specific users"+req.params.id);
});
// /users/get-user-details
router.get("/search-by-locaton/:state/:city",(req,res)=>{
    res.send("get reuest for specific users"+req.params.state+req.params.city);
});

router.get("/search/:key([0-9]{4})",(req,res)=>{
    res.send("data captured is"+req.params.key);
});
router.get("/search-username/:key([a-zA-z]{5})",(req,res)=>{
    res.send("data captured is"+req.params.key);
});
router.get("*",(req,res)=>{
    var resObj = {
        statusCode:404,
        statusMsg: "URL not found"
    }
    res.send(resObj);
});

module.exports = router; 