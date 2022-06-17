var express = require("express");
// import express from 'express';
// var fetch = require('node-fetch');
// import fetch from 'node-fetch';

// app.set('view engine', 'jade');
// app.set('view engine', 'pug')
// app.set('views','./views/index.pug');
// app.get(function() {
    // app.set('port', (process.env.PORT || 6000));
    
// });


// Routing 
var app = express();
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');



// var users = require ('./Routes/user.js');
// var products = require ('./Routes/product.js');
// app.use('/products',products);
// app.use('/users',users);

// app.get('/', (req, res) => {
//     res.send({ title: 'Hey', message: 'Hello there!' })
//   })


// app.post('/test',function (req,res,next) {
//     // res.render('index',{title: 'ARC Madhu', subtitle:"XYZ test"});
//     res.send('first_view');
// });
// import fetch from 'node-fetch';
const playwright = require('playwright'); 
const axios = require('axios'); 
const cheerio = require('cheerio'); 
 

app.get("/getTimeStories",(req,res)=>{
    axios.get('https://time.com/') 
	.then(({ data }) => console.log(data.voices-ad-desktop));


	// const html =  getHtmlPlaywright('https://time.com/'); 
	// const $ = cheerio.load(html); 
	// const content = extractContent($); 
	// console.log('voices-ad-desktop', content); 


    // const extractContent = $ => 
	// $('.homepage-section-v2 voices-ls') 
	// 	.map((_, product) => { 
	// 		const $product = $(product); 
	// 		return { 
	// 			id: $product.find('a[data-product_id]').attr('partial latest-stories'), 
	// 			title: $product.find('h3').text(), 
	// 			// price: $product.find('.price').text(), 
	// 		}; 
	// 	}) 
	// 	.toArray(); 
// ... 
 
// const content = extractContent($); 
// console.log(content); 
    // const getReddit = async () => {
    //     const response = await fetch('https://time.com/');
    //     const body = await response.text();
    //     console.log(body); // prints a chock full of HTML richness
    //     return body;
    // };
    // fetch('https://time.com/')
    // .then((response) => {
    //     // return response.text();
    //     const body = response.text().tout__list-item-text;
    //         console.log(body); // prints a chock full of HTML richness
    //         return body;
    // })
    // .then((myJson) => {
    //     console.log(myJson);
    // });
})



// app.get("/getUsers",(req,res)=>{
// res.send("Hello World");
// });
// app.get("/getData",(req,res)=>{
//     var  dataObj = {
//       _id : 09,
//       name : "ABC",
//       active : true
//   }
//     res.send(dataObj);
//     });
app.listen(8040);
