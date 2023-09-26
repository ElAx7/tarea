const path= require('path');
const express=require('express');

module.exports= function(app){
    app.use('/assets', express.static(path.join(__dirname,'assets')))

    app.get('/', async(req,res)=>{
        const urlnws= `https://newsapi.org/v2/everything?q=${req.query.search}&apikey=c8fa2b61080b4babbeb3f7234e784054`;
        try{
            const response= await fetch(urlnws);
            const json= await response.json();
            res.render('home', {articles: json.articles });
        }catch (error){
            console.error(error);
            res.status(500).send({error: 'ERROR!'});
        }
       });
}