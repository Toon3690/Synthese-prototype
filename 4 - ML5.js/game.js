let video;
let poseNet;
let pose;
let skeleton;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    //document.getElementById("defaultCanvas0").style = "display: none";
}

function gotPoses(poses) {
    //console.log(poses); 
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}




function modelLoaded() {
    console.log('poseNet ready');
}

function draw() {
    translate(window.innerWidth, 0);
    scale(-1, 1);
    //background(255,255,255);
    //image(video, 0, 0, video.width, video.height);
    //console.log(video.width);

    if (pose) {
        let poseX = pose.nose.x;
        let poseY = pose.nose.y;
        fill(255, 0, 0);
        ellipse((poseX / 640) * window.innerWidth, (poseY / 480) * window.innerHeight, 20);
        //console.log(poseX);



        changeColor(poseX, poseY);

    }
}

function changeColor(poseX, poseY) {

    let positieX = (poseX / 640) * window.innerWidth;
    let positieY = (poseY / 480) * window.innerHeight;

    if (positieX < window.innerWidth / 4) {
        if (positieY < window.innerHeight / 2) {
            //wit
            background(255, 255, 255);
        } else if (positieY > window.innerHeight / 2) {
            //zwart
            background(0, 0, 0);
        }
        
    } else if (positieX > window.innerWidth / 4 && positieX < window.innerWidth / 2) {
        if (positieY < window.innerHeight / 2) {
            //rood
            background(255, 0, 0);
        } else if (positieY > window.innerHeight / 2) {
            //roze denk ik
            background(255, 0, 128);
        }

    } else if (positieX > window.innerWidth / 2 && positieX < window.innerWidth * 0.75) {
        if (positieY < window.innerHeight / 2) {
            //paars ofzo
            background(255, 0, 255);
        } else if (positieY > window.innerHeight / 2) {
            //dark orange
            background(255, 140, 0);
        }

    } else if (positieX > window.innerWidth * 0.75) {
        if (positieY < window.innerHeight / 2) {
            //geel
            background(0, 255, 0);
        } else if (positieY > window.innerHeight / 2) {
            //silver
            background(192, 192, 192);
        }
    }
}