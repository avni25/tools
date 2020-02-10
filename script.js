var sounds = ["zero.mp3","one.mp3","two.mp3","three.mp3","four.mp3","five.mp3",
              "six.mp3","seven.mp3","eight.mp3","nine.mp3","ten.mp3"];


var colors = ["white","blue", "black", "yellow", "green", "red","pink","purple","brown"];




function myTime(){
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById("p1").textContent = n;

}

var btn1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

var p0 = document.getElementById("p0");
var ptime = document.getElementById("time");
var input = document.getElementById("ip");


document.addEventListener("click", function(){    
    var x = Math.ceil((event.clientX-8) /sizeOfSqr);     // Get the horizontal coordinate
    var y = Math.ceil((event.clientY-256) /sizeOfSqr);
    console.log( "clientX: " + event.clientX +" - clientY: " + event.clientY);
    fillSqr(x,y,"red");
});


btn1.addEventListener("click", function(){
    //p0.textContent="qwqeqwe";
    var snd = new Audio("./sounds/"+sounds[3]); 
    snd.play();
    
});

b2.addEventListener("click", function(){
    var x = Math.floor(Math.random()*100);
    p0.textContent= x;   
    readNumber(x);
});

b3.addEventListener("click", function(){
    
    
});

function writeToText(event) {
    var x = event.keyCode;
    if (x == 13) {  // 27 is the ESC key
      ptime.textContent = input.value;
      input.value = "";
      console.log("enter key");
    }
}


function readNumber(num){    
    var a = num%10;
    var b = Math.floor(num/10);
    var sa = new Audio("./sounds/"+sounds[a]);
    var sb = new Audio("./sounds/"+sounds[b]);
    sb.play();
    setTimeout(() => {
        sa.play();
    }, 700);
}

//--------------------------------------------------------------------
//------------------------CANVAS--------------------------------------
//--------------------------------------------------------------------
var width = 600;   //(600 /20 - 1) square wide
var height = 400;  //(400 /20 - 1) square height
var s_width = (width/20)-1;
var s_height = (height/20)-1;
var c_canvas = document.getElementById("c");
var context = c_canvas.getContext("2d");
var sizeOfSqr= 20;


function drawGridLinesForCanvas(){
    for (var x = 0; x <= width; x += sizeOfSqr) {        
        context.moveTo(x, 0);
        context.lineTo(x, height);        
    }
      
    for (var y = 0; y <= height; y += sizeOfSqr) {        
        context.moveTo(0, y);
        context.lineTo(width, y);   
        
    } 
    context.stroke();
}

drawGridLinesForCanvas();
//generateRandomSqr(10);

  
  
//--------------------------------------------------------------------
//------------------------CANVAS--------------------------------------
//--------------------------------------------------------------------

function fillSqr(x,y,color){
    context.fillStyle = color;
    context.fillRect(((x-1)*sizeOfSqr),((y-1)*sizeOfSqr),sizeOfSqr-1,sizeOfSqr-1);    
}

function generateRandomSqr(amount){
    for(var i=0; i < amount; i++){
        var rndX = Math.round(Math.random()*(width/sizeOfSqr-1));
        var rndY = Math.round(Math.random()*(height/sizeOfSqr-1));
        var c = Math.round(Math.random() * colors.length);
        fillSqr(rndX,rndY, colors[c]);
    }
}

function drawWall(x, y, len){    
    for(var i=0; i < len; i++){         
        var d = Math.floor(Math.random()*4)+1;
        switch (d) {
            case 1:
                x++;
                break;
            case 2:
                x--;
                break;
            case 3:
                y++;
                break;
            case 4:
                y--;
                break;    
            default:
                break;
        }          
        fillSqr(x, y,"black");
    }
}



drawWall(5,10,100);






//-----------------INTERVALS-------------------------------------

setInterval(myTime, 1000);
var gen = setInterval(function(){    
    //generateRandomSqr(10);
}, 100);

//clearInterval(gen);
//----------------------------------------------------------------

window.onload = function (){
    
}


  

