const axios = require('axios');
const playwright = require('playwright');
const fs = require('fs');
const request = require('request-promise');
const Cheerio  = require('cheerio');
const express = require('express');
const json2csv = require('json2csv').Parser;

var app = express();
const url = 'https://time.com';
app.get("/getTimeStories",(req,res)=>{
(async () => {
    let timeData = []
    const response = await request({
        url: url,
        headers: {
            accept: "text/html",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
        },
        gzip: true,
    })


    let $ = Cheerio.load(response)
    let resultData= []
    for(let x = 0; x < 6; x++){
       
        console.log(x,'x')

        let titleData = $(`div[class="partial latest-stories"] > ul > li[class="latest-stories__item"]:nth-last-child(${x+1}) > a > h3[class="latest-stories__item-headline"]`).text()
        let titleLink = url + $(`div[class="partial latest-stories"] > ul > li[class="latest-stories__item"]:nth-last-child(${x+1}) > a `).prop('href')
        resultData.push({title:titleData,link:titleLink})

    }
    res.send (resultData)

})();

})
app.listen(8040);
