
var colors = ["white","blue", "black", "yellow", "green", "red","pink","purple","brown"];




function myTime(){
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById("p1").textContent = n;

}
var min = document.getElementById("minutes");
var time_zone = document.getElementById("timeZone");

var b3 = document.getElementById("b3");

var p0 = document.getElementById("p0");
var lbl1 = document.getElementById("lbl-1");
var lbl1_1 = document.getElementById("lbl-1-1");
var ip1 = document.getElementById("ip-1");
var lbl2 = document.getElementById("lbl-2");
var lbl2_1 = document.getElementById("lbl-2-1");
var ip2 = document.getElementById("ip-2");
var ip3 = document.getElementById("ip-3");
var lbl3 = document.getElementById("lbl-3");
var lbl3_1 = document.getElementById("lbl-3-1");

var ip4 = document.getElementById("ip-4");
var lbl4 = document.getElementById("lbl-4");
var lbl4_1 = document.getElementById("lbl-4-1");

var ip5 = document.getElementById("ip-5");
var lbl5 = document.getElementById("lbl-5");
var lbl5_1 = document.getElementById("lbl-5-1");

var ip6 = document.getElementById("ip-6");
var lbl6 = document.getElementById("lbl-6");
var lbl6_1 = document.getElementById("lbl-6-1");

var ip7 = document.getElementById("ip-7");
var lbl7 = document.getElementById("lbl-7");
var lbl7_1 = document.getElementById("lbl-7-1");

var ip8 = document.getElementById("ip-8");
var lbl8 = document.getElementById("lbl-8");
var lbl8_1 = document.getElementById("lbl-8-1");

var ip9 = document.getElementById("ip-9");
var lbl9 = document.getElementById("lbl-9");
var lbl9_1 = document.getElementById("lbl-9-1");

var ip10 = document.getElementById("ip-10");
var lbl10 = document.getElementById("lbl-10");
var lbl10_1 = document.getElementById("lbl-10-1");

var soundCheckBox = document.getElementById("soundCheck");

var first_labels = [lbl1, lbl2, lbl3,lbl4,lbl5,lbl6,lbl7,lbl8,lbl9,lbl10];
var sec_labels = [lbl1_1, lbl2_1, lbl3_1, lbl4_1, lbl5_1,lbl6_1,lbl7_1,lbl8_1,lbl9_1,lbl10_1];
var sndPlayed = [0,0,0,0,0,0,0,0,0,0];
var timediff = 20;
var timeZone = 2;



b3.addEventListener("click", function(){
    var all_labels = first_labels.concat(sec_labels);
    for(var i=0; i<all_labels.length; i++){
        all_labels[i].textContent = "";
    }

    for(var i = 0; i < sndPlayed.length; i++){
        sndPlayed[i] = 0;
    }
    
});

function writeToText(event, input, label) {    
    if (event.keyCode == 13) {  // 27 is the ESC key
      label.textContent = input.value;
      input.value = "";
      
    }
}


function writeToTextSeperate(event, input, label, label_2) { 
    var str =" ";
    if(input.value.includes("-")){
        str = "-";
    } 
    var arr = input.value.split(str); 
    if (event.keyCode == 13) {  // 27 is the ESC key
      
      label.textContent = arr[0];
      label_2.textContent = arr[1];
      input.value = "";
      
    }
}

function readNumber(num){    
    var a = num%10;
    var b = Math.floor(num/10);
    var sa = new Audio("./sounds/"+a+".mp3");
    var sb = new Audio("./sounds/"+b+".mp3");
    sb.play();
    setTimeout(() => {
        sa.play();
    }, 700);
}

function readPark(str){
    var ch = str.split("");
    var sec = 500;
    for (let index = 0; index < ch.length; index++) {
        
        setTimeout(()=>{
            var s = new Audio("./sounds/"+ch[index]+".mp3");
            console.log(ch[index]);
            s.play();
        }, sec);
        sec += 500;
    }
    
}

function readWarningFor(str){
    var sa = new Audio("./sounds/warning.mp3");
    var sb = new Audio("./sounds/conflict.mp3");
    sa.play();
    setTimeout(() => {
        sb.play();
    }, 1000);
    setTimeout(() => {
       readPark(str);
    }, 3000);
    
    
}

function flashtext(ele,col) {
    var tmpColCheck = ele.style.backgroundColor;
    
      if (tmpColCheck === 'silver') {
        ele.style.backgroundColor = col;
      } else {
        ele.style.backgroundColor = 'silver';
      }
} 

function select_value(){
    timediff = parseInt(min.options[min.selectedIndex].textContent);
    console.log(timediff);
}

function select_Zone(){
    timeZone = parseInt(time_zone.options[time_zone.selectedIndex].textContent);
    console.log(timeZone);
}



//-----------------INTERVALS-------------------------------------

setInterval(myTime, 1000);


var gen = setInterval(function(){   
    var d = new Date();
    d.setMinutes(d.getMinutes() + timediff);   // subtract 20 minutes
    var n = d.toLocaleTimeString(); 
    //console.log(d.getMinutes);
    
    for(var i=0; i< sec_labels.length; i++){
        //console.log(sndPlayed[i]);
        if (first_labels[i].textContent == "0"){
            sndPlayed[i] = 0;
        } 
        if(sec_labels[i].textContent == ""){

        }else if(n > sec_labels[i].textContent){        
            flashtext(sec_labels[i], "red");
            if(sndPlayed[i] == 0){
                if(soundCheckBox.checked == true){
                    readWarningFor(first_labels[i].textContent);
                }                
                sndPlayed[i]=1;                
            } 
        }else{        
            sec_labels[i].style.backgroundColor = "powderblue";            
        }
    }
    
}, 1000);




  

