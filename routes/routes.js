const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const router = express.Router();

//import model
const Item = require('../models/shoppingItem');
const cartItem = require('../models/cartItem');
const User = require('../models/user');

//login system
//register
router.post('/register',(req,res,next)=>{
    const hashedPassword = req.body.password;
    User.find({"Username":req.body.username},function(err,result){if(result ==undefined || result.length == 0){
        bcrypt.hash(hashedPassword, saltRounds, function(err, hash) {
            let newUser = new User({
                Username : req.body.username,
                Password : hash,
                CartItems: " "
            })
            newUser.save(function (err) {
                if (err) return handleError(err);
                // saved!
              });
            });
    }else{
        console.log("Username already exists.");
    }
})
})
//login (set token)
router.post('/login',(req,res,next)=>{
    const plainTextPassword= req.body.password;
    User.findOne({"Username": req.body.username},function(err,test1){if( test1==undefined || test1.length == 0){console.log("No users found");}else{
        const hashedPassword = test1.Password;
        const userName = req.body.username; 
        bcrypt.compare(plainTextPassword, hashedPassword, function(err, test) {
            if(test){
                const token = jwt.sign({
                    Username: userName
                },"the misty mountains core",
                {expiresIn:"1h"}
            );
            jwtArray.push(token);
            }
      });
    }})
})

const jwtArray=[];
//protect page
const checkAuth = (req,res,next)=>{
    try{
    const decoded = jwt.verify(jwtArray[0], "the misty mountains core");
    const userData = decoded;
    decodedUserData.push(userData);
    next();
    }catch(error){
        console.log("Auth Failed");
    }
}

const decodedUserData = [];

router.get('/login',checkAuth,(req,res,next)=>{
    res.json("Welcome,user: "+ decodedUserData[0].Username + ".");
})
//protect page
const checkAdmin = (req,res,next)=>{
    const decoded = jwt.verify(jwtArray[0], "the misty mountains core");
    const userData = decoded;
    decodedUserData.push(userData);
    if(decodedUserData[0].Username == "admin"){
        next()
    }else{
        console.log("Admin permission required.")
    }
}

//api routes
router.post('/createItem',checkAdmin,(req,res,next)=>{
    let newItem = new Item({
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemPicture: req.body.urlString
    });
    newItem.save(function (err) {
        if (err) throw err;
        // saved!
      });
});

router.post('/shoppingCart',checkAuth,(req,res,next)=>{

    User.find({"Username":decodedUserData[0].Username},function(err,data){
        if(err){
            res.json(err);
        }else{
            previousCartItems = data[0].CartItems;
            User.updateOne({"Username":decodedUserData[0].Username},{"CartItems": previousCartItems + req.body.itemDetails},function(err,res){
                if(err) throw err;
                //saved!
            })
        }
    })

})

router.get('/getShoppingItems',checkAuth,(req,res,next)=>{
    User.find({"Username":decodedUserData[0].Username},function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    })
});

router.get('/getItems',(req,res,next)=>{
    Item.find(function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
});

router.get('/getItem/:id',(req,res,next)=>{
    Item.find({itemName: req.params.id},function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
});



module.exports = router;
