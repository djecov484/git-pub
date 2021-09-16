const express = require('express');
const app = express();
const drinks= require('./models/drinks');
const food = require('./models/food');

app.get('', (req,res) => {
    res.send('Welcome to the Gitpub App!');
})

app.get('/drinks', (req,res) => {
    res.render('drinks_index.ejs', {allDrinks:drinks});
})

app.get('/drinks/:id', (req,res)=> {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]});
})

// foods
app.get('/food', (req,res) => {
    res.render('food_index.ejs', {allFood:food});
})

app.get('/food/:id', (req,res)=> {
    res.render('food_show.ejs', {food: food[req.params.id]});
})


app.listen(3000, () => {
    console.log('listening');
});