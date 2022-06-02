left_wristx = 0;
right_wristx = 0;
difference = 0;

function setup() {

    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(560,130);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function draw() {

background("#9c6574");
document.getElementById("font_size").innerHTML = "Font size of the text will be = "+difference+"px";
fill("#ff4d6a");
textSize(difference);
text("Alice Angel",50,250);

}

function gotPoses(results,error) {

if(error){
    console.error(error);
}
if(results.length > 0){
    console.log(results);

    right_wristx = results[0].pose.rightWrist.x;
    left_wristx = results[0].pose.leftWrist.x;

    difference = floor(left_wristx - right_wristx);

    console.log("rightwristx ="+results[0].pose.rightWrist.x+"rightwristy"+results[0].pose.rightWrist.y);
    console.log("leftwristx ="+results[0].pose.leftWrist.x+"leftwristy"+results[0].pose.leftWrist.y);
}
}

