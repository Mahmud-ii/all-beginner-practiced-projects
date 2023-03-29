var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
//for initial/starting value;

var timer = false;//this will decide/denote if timer is working/running, if true working/running ;if false not working/running;


function start(){
    timer = true;
    stopwatch();    
}//when user clicks start btn it'll start timer & call for stopwatch();


function stop(){
    timer = false;    
}//when user clicks stop btn it'll stop timer;


function reset(){  
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}//by click reset btn it'll stop the times & all html value/innerhtml will be get & set to "00";



function stopwatch(){
    if(timer == true){
        //when user clicks start btn then this condition will be true/satisfied;& starts;
        count = count + 1;//every 10mlsec will increase 1 count;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }//if count is 100 it'll add 1 to sec & then count value will be 0;

        if(sec == 60){
            min = min+1;
            sec=0;
        }//if sec is 60 it'll add 1 to min & then sec value will be 0;

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }//if min is 60 it'll add 1 to hr & then min value will be 0;

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;
        //getting & storing/setting in variable;

        if(hr < 10){
            hrString = "0" + hrString;
        }

        if(min < 10){
            minString = "0" + minString;
        }

        if(sec < 10){
            secString = "0" + secString;
        }

        if(count < 10){
            countString = "0" + countString;
        }
//adding string"0" to innerhtml if value < 10;



        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        //getting & setting the value;

        setTimeout("stopwatch()", 10);//when user start timer by it'll start timer/true & call the stopwatch() ; if timer is true then it'll run the code then after running the code it'll come to this setTimeout function & will repeat the code again & again till user stop the timer or condition false;
        //ml-sec is 1000 part of 1 second; 
    }
}
