

function myfunction(){

var x = document.forms["myForm"]["firstname"];
alert(x.value);
}
function pageload(){
    var form = document.getElementById("myForm");
    form.onsubmit = myfunction;
}
window.onload = pageload



/*
var sum =0 ;
for(var i =0;i<100;i++){
    if(i %2 == 0){
        sum = sum+i;
    }

}
console.log(sum);

var i =0;
var sum = 0;
while(i<100){
    i++;
    if(i%2 ==0){
        sum = sum+i
    }
    
}
console.log(sum);
*/