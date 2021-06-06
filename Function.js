//function decleration

function add(x,y){
  var result=x+y;
   return result;
}
//var result2=add(3,4);
console.log(add(3,4));
document.write("<p style='color:red;'>"+add(3,4)+"</p>");

//function exprestion
var sub=function(x,y){
   var result=x+y;
   return result;
}

console.log(9,4);

var firstnum=10;
var secoundnum=5;

var addoutput=add(firstnum,secoundnum);
var suboutput=add(firstnum,secoundnum);
console.log(addoutput,suboutput);

