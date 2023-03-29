let flag = 0;// current slide/image;


function controller(x){
    flag = flag + x;
    //x is (-1) in prev/left slide, subtract one from flag's value;
    //x is (1) in next/right slide, adds one on flag's value;
    slideShow(flag);
}//when clicked on the slides this function & click event will work;
// <!-- controller(1) / clicking the next/right slide is for adding one & going one slide upward -->// left
    // flag = 2 + (-1) = 1


// <!-- controller(-1) / clicking the prev/left slide is for subtract one & going one slide backward --> // right
    // flag = 2 + 1 = 3




slideShow(flag);//calling function & passing a parameter;



function slideShow(num){
    //in the parameter "num" receiving the variable flag;
    //how many number will passed in variable/parameter (num) it'll show that pic/slide;
    let slides = document.getElementsByClassName('slide');//getting slide images;

    if(num == slides.length){
        flag = 0;
        num = 0;
    }//when flag is 4 it'll make everything's value 0; & show 0th image; /// or when num & slides length are same in number & user clicks for more slide it'll show/go back to first image;

    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }//when num value is less then 0; it'll come back to 3rd image/slide; // or when num < 0 & user clicks for more it'll subtract from variable (flag & num -1) which means last/4th image;

    for(let y of slides){
        y.style.display = "none";
    }//when slideshow() called first it'll hide all the slides/images; & which number will be passed in slides array it'll(num/length/flag) send all slides into var(y) & then show it/display it only; 

    slides[num].style.display = "block";//visibling/displaying the 0th number of image, by accessing the array of 'num';  variable flag's value(0) passing in num parameter, 
}