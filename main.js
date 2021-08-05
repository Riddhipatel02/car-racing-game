canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=90;
car2_width=100;
car2_height=90;

background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.png";

car1_x=10;
car1_y=10;
car2_x=10;
car2_y=100;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keyPressed=e.keyCode;
        if(keyPressed=='38'){
            car1_up();
            console.log("car1_up");
        }
        if(keyPressed=='40'){
            car1_down();
            console.log("car1_down");
        }
        if(keyPressed=='37'){
            car1_left();
            console.log("car1_left");
        }
        if(keyPressed=='39'){
            car1_right();
            console.log("car1_right");
        }

        if(keyPressed=='87'){
            car2_up();
            console.log("W");
        }
        if(keyPressed=='83'){
            car2_down();
            console.log("S");
        }
        if(keyPressed=='65'){
            car2_left();
            console.log("A");
        }
        if(keyPressed=='68'){
            car2_right();
            console.log("D");
        }
    }
function car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("when up arrow is pressed car1 x="+car1_x+"and car1 y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("when down arrow is pressed car1 x="+car1_x+"and car1 y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("when left arrow is pressed car1 x="+car1_x+"and car1 y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right(){
    if(car1_x<=675){
        car1_x=car1_x+10;
        console.log("when right arrow is pressed car1 x="+car1_x+"and car1 y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("when w is pressed car2 x="+car2_x+"and car2 y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("when s arrow is pressed car2 x="+car2_x+"and car2 y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("when a is pressed car2 x="+car2_x+"and car2 y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if(car2_x<=675){
        car2_x=car2_x+10;
        console.log("when d is pressed car2 x="+car2_x+"and car2 y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
if(car1_x > 674){
console.log("car1");
document.getElementById('game_status').innerHTML = "Car 1 Won!!";
}
else if(car2_x > 674){
console.log("car2");
document.getElementById('game_status').innerHTML = "Car 2 Won!!";
}
