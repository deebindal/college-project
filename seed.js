var mongoose = require("mongoose");
var College = require("./models/College");

var DATA = [
    {
        name  : "Maharaja Agrasen Institute of Technology",
        image :"http://www.engineering-admission.in/wp-content/uploads/2019/06/Maharaja-Agrasen-Institute-of-Technology-Direct-Admission.png",      
        quora : "https://www.quora.com/What-is-your-review-of-Maharaja-Agrasen-Institute-of-Technology",
        Siksha : "https://www.shiksha.com/university/guru-gobind-singh-indraprastha-university-delhi-24725/reviews",
        career360 : "https://www.careers360.com/colleges/maharaja-agrasen-institute-of-technology-delhi/reviews",
        Placement : "https://www.mait.ac.in/index.php/placements/placement-details",
        Cultural_Soc : "https://www.mait.ac.in/index.php/societies/cultural",
        Technical_Soc : "https://www.mait.ac.in/index.php/societies/technical"

    },
    {
        name  : "GGSIPU",
        image :"https://timesofindia.indiatimes.com/thumb/msid-62509409,imgsize-85917,width-400,resizemode-4/62509409.jpg",        
        quora : "https://www.quora.com/What-is-your-review-of-Guru-Gobind-Singh-Indraprastha-University",
        Siksha : "",
        career360 : "",   
        Placement : "",
        Cultural_Soc : "",
        Technical_Soc : ""
           
        
        
    },
    {
        name  : "BVP",
        image :"https://images.static-collegedunia.com/public/college_data/images/appImage/13059_BVPCE_APP.png",        
        quora :  "https://www.quora.com/What-is-your-review-of-Bharati-Vidyapeeths-College-of-Engineering-Delhi",
        Siksha : "",
        career360 : "",   
        Placement : "",
        Cultural_Soc : "",
        Technical_Soc : ""
        
    },
    {
        name  : "BPIT",
        image :"https://images.static-collegedunia.com/public/college_data/images/campusimage/1416571071bpit1.jpg",   
        quora : "https://www.quora.com/Is-BPIT-Delhi-a-good-college-for-CSE-IT-ECE",
        Siksha : "",
        career360 : "",   
        Placement : "",
        Cultural_Soc : "",
        Technical_Soc : ""
    
    }
    
]



function seedDB(){
    College.remove({},function(err){
        if(err){
            console.log(err)
        }else{
            console.log("Colleges removed")
        }
    });
    
    
    DATA.forEach(function(seed){
        College.create(seed,function(err, data){
            if(err){
                console.log(err)
            }else{
                data.save();
                console.log("College added");
            }
        })

    })

   

}

module.exports = seedDB;

