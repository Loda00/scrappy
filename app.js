const express = require('express');
let axios = require('axios');
let request = require('request')
let cheerio = require('cheerio');
var CircularJSON = require('circular-json');

const app = express();

const url = `https://comparabien.com.pe/tarjetas-credito`;

app.set(express.json());




app.get('/',(req,res)=>{

    request(url,function (error, response, html) {
        if (!error && response.statusCode == 200) {
            // console.log(html);
            // res.json(html)
            let $ = cheerio.load(html);

            let kurs = [];

            // $('form#compare').each(function(i, element){
            //     var a = $(this);
            //     console.log(a);
            //     res.json(JSON.parse(CircularJSON.stringify(a)))
            // });   

            let classContent = 'view view-blog-carousel view-id-blog_carousel view-display-id-block_2 js-view-dom-id-11931c0d3e34f4a537e5f302f293b748a192aba289fbb998183fd0abaead327e';

            $('.view').each(function(i, element){
                kurs.push({img: $(this).children()});
            });


            res.json(JSON.parse(CircularJSON.stringify(kurs)))

        }   
        });


    // axios.get(url)
    // .then(rs =>{
    //     let json = CircularJSON.stringify(rs);

    // // res.json(CircularJSON.stringify(rs))
    //         let $ = cheerio.load(json);
    //         let kurs = [];
    //         let html = [];

    //         $('form','#page-wrapper').each((i,element)=>{
            
    //                 let html =  $(element).attr('method')
              
    //             console.log('element',element)
    //         res.json( CircularJSON.stringify(element))
    //         })
    
    // })
    // .catch(err =>{
    //     console.log('err', err)
    // })
})




app.listen(2000,()=>{
    console.log(`Run 200 => ok ...`)
})