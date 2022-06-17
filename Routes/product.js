var express = require("express");
var router = express.Router();

// /products/add-products
router.get('/',(req,res) =>{
    res.send('get request products data')
})
// /products/add-products
router.post('/add-products',(req,res)=>{
    // router.post("/add-products",(req,res)=>{
    res.send("get reuest add products");
    console.log(res)
});






// /user/edit-products
router.put("/edit-products",(req,res)=>{
    var  dataObj = {
      _id : 09,
      name : "ABC",
      active : true
  }
    res.send(dataObj);
    res.send("get reuest edit products");
});
// // /user/delete-user
router.get("/delete-products",(req,res)=>{
    var  dataObj = {
      _id : 09,
      name : "ABC",
      active : true
  }
    res.send(dataObj);
    res.send("get reuest details products");
});
module.exports = router;