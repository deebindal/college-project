var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
    name : String,
    image :String,
    venue : String,
    date : Date
    
});

var Event = mongoose.model("event", eventSchema);

//  var event = new Event({
//     name : "Android Workshop",
//     image : "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjeanbaptiste%2Ffiles%2F2019%2F09%2FAndroid-10-webpage.jpg",
//     venue : "BVP",
//     date : 2018-01-01, 11:30

//     })

// event.save(function(err,ab){
//      if(err){
//          console.log(err)
//      }else{
//          console.log(ab);
//      }
//  });

module.exports = Event;