var song1="";
var song2="";
var song1status="";
var song2status="";
rightwristX=0;
rightwristY=0;
leftwristX=0;
leftwristY=0;
rightwristscore=0;
leftwristscore=0;

function preload()
{
song1=loadSound("hp.mp3");
song2=loadSound("jb.mp3");
}

function setup()
{
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",getposes);
}

function draw()
{
image(video,0,0,600,500);
song1status=song1.isPlaying();
song2status=song2.isPlaying();

fill("#FF0000");
stroke("#FF0000");
if(leftwristscore>0.2)
{
    circle(leftwristX,leftwristY,20);
song1.stop();
if(song2status==false)
{
    song2.play();
document.getElementById("song").innerHTML="playing the song jungle book"
}
    
}
}

function modelloaded()
{
    console.log("posenet is initialized");
}






function getposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        rightwristscore=results[0].pose.keypoints[10].score;
        leftwristscore=results[0].pose.keypoints[9].score;
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("leftwristX="+leftwristX);
        console.log("leftwristY="+leftwristY)
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("rightwristX="+rightwristX);
        console.log("rightwristY="+rightwristY);
    }
}




function play()
{
    song1.play();
    song1.setVolume(1);
song1.rate(1);
}