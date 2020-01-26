var express = require("express");
var app = express();
var mongoose = require("mongoose");
var College = require("./models/College");
var Events = require("./models/events");
var seedDB = require("./seed");
var Bodyparser = require("body-parser");


app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/project",{ useNewUrlParser : true });
app.use(Bodyparser.urlencoded({extended : true}))
seedDB();


app.get("/",function(req,res){
    res.render("landing");
})

app.get("/home",function(req,res){
    res.render("home");
})

app.get("/result",function(req,res){
    console.log(req.query.name);
    var name = req.query.name;
    College.findOne({ name : name}, function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data.name);
            res.render("result", {College : data })
        }
    })
})

app.get("/events",function(req,res){
  Events.find({},function(err,foundEvent){
      if(err){
          console.log(err)
      }else{
        res.render("events" ,{Event : foundEvent} )
      }
  })  
})

app.get("/events/new", function(req,res){
    res.render("new");
})

app.post("/events", function(req,res){
    
    var name = req.body.name;
    var image = req.body.image;
    var venue = req.body.venue;
    var date = req.body.date;
    var abcd = {name : name , image : image, venue : venue, date : date};
    Events.create(abcd ,function(err,allevent){
        if(err){
            console.log(err)
        }else{
            allevent.save(function(err,x){
                if(err){
                    console.log(err)
                }else{
                    console.log("New Event added to the database");
                }
            })        
        }
    })
    res.redirect("/events");

})


app.listen(2000,function(){
    console.log("serving on port 2000");
});