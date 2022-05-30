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

}

function gotPoses(results,error) {

if(error){
    console.error(error);
}
if(results.length > 0){
    console.log(results);

    console.log("rightwristx ="+results[0].pose.rightWrist.x+"rightwristy"+results[0].pose.rightWrist.y);
    console.log("leftwristx ="+results[0].pose.leftWrist.x+"leftwristy"+results[0].pose.leftWrist.y);
}
}

