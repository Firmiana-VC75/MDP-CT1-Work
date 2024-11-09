let bodyPose;
let video;
let poses = [];
//let connections;
let song;
let isPlaying = false;
let nose
let triggerPoint

function preload() {
  bodyPose = ml5.bodyPose("MoveNet", { flipped: true });
  song = loadSound("1805171318.mp3");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();
  bodyPose.detectStart(video, gotPoses);
  
  nose = createVector(0, 0)
  triggerPoint = createVector(0, 0)
}

function draw() {
  image(video, 0, 0);
  drawPoses()
  console.log(nose.dist(triggerPoint))
  if(triggerPoint.x < 200 || triggerPoint.x > 350){
    fill("green")
    circle(width*0.5, height*0.5, 100)
    
    if(!song.isPlaying()){
      song.play()
    }
  }
  else {
    song.stop()
  }
  
}

function gotPoses(results) {
  poses = results;
  if (poses.length > 0) {
    let pose = poses[0]
    console.log(pose)
    nose.x = pose.nose.x
    nose.y = pose.nose.y
    //triggerPoint.x = pose.right_wrist.x
    //triggerPoint.y = pose.right_wrist.y
    triggerPoint.x = pose.nose.x
    triggerPoint.y = pose.nose.y
  }
}

function drawPoses(){
  if (poses.length > 0) {
    let pose = poses[0];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let keypoint = pose.keypoints[i];
      fill(0, 0, 255);
      noStroke();
      if (keypoint.confidence > 0.1) {
        circle(keypoint.x, keypoint.y, 15);
      }
    }
    // for (let i = 0; i < connections.length; i++) {
    //   let connection = connections[i];
    //   let a = connection[0];
    //   let b = connection[1];
    //   let keyPointA = pose.keypoints[a];
    //   let keyPointB = pose.keypoints[b];
    //   stroke(135, 200, 79);
    //   strokeWeight(5);
    //   line(keyPointA.x, keyPointA.y, keyPointB.x, keyPointB.y);
    // }
  }
}
