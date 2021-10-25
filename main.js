x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

pineapple = "";
draw_pineapple = "";

speak_data = "";

to_number = "";

function preload(){
    pineapple = loadImage("pinapple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening, Please Speak...";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    
    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;

    to_number = Number(content);
    
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "Started drawing Pineapple";
        draw_pineapple = "set";
    }
    else{
        document.getElementById("status").innerHTML = "The speech has not recognized a number";
    }
}

function setup(){
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0, 150);
}

function draw(){
    if(draw_pineapple == "set"){
        for(var i = 1; i <= to_number; i++){
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(pineapple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + " Pineapples drawn";
        speak_data = to_number + " Pineapples drawn";
        speak();
        draw_pineapple = "";
    }
}