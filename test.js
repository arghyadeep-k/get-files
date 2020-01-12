const Get=require("./index");
const async = require("async");

var url = "http://i.imgur.com/GaP.jpg";
  var options = {
    director: "./images/cats/",
    filename: "cat.gif"
  }

var get = new Get();

// async function test(){
    // await get.async_get(url,options);
// }  
  
 // test();
 
get.get(url,options,function(err){
	if(err) console.log(err);
});