var cnvs = document.getElementById("canvas"); 
var ctx = cnvs.getContext("2d");


var colors=["blue","black","red"]
var color2=["yellow","green"]



x=150;
y=200;
x1=300;
y1=300;


for (var i = 0; i <= 2; i++) {

ctx.beginPath();
ctx.strokeStyle = colors[i];
ctx.lineWidth = 2 ;
ctx.arc(x,y,100,0,2*Math.PI);
ctx.stroke();
console.log(color);

x +=250;
}
for (var j = 0; j <= 1; j++) {
    ctx.beginPath();
    ctx.strokeStyle = color2[j];
    ctx.lineWidth = 2 ;
    ctx.arc(x1,y1,100,0,2*Math.PI);
    ctx.stroke();
    console.log(color);
    
    x1 +=225;
    }

