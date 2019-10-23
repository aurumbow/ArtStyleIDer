//set up un-class-locked variables
 //create KNNClassifier
const knnClassifier = ml5.KNNClassifier();
 //user input preparation
let input;
let userImg;
let goButton;
let endResult = "it broke lmao";

//set up js-related stuff
function setup(){
  createCanvas(400,400);
 //set up user input
  input = createFileInput(handleFile);
  input.position(0, 0);
 //set up the button
  goButton = createButton("ID this Image!");
  goButton.mousePressed(function(){
    //load the example images
    knnClassifier.load("path"); //replace "path" with the path to the JSON file
    knnClassifier.classify(userImg, function(err, result) {
      console.log(result); // result.label is the predicted label
      endResult = result;
    });
  });
}

//doing things is fun and cool
function draw(){
   background(255);
 //show users image
  if (userImg) {
    image(userImg, 10, 20, width, height);
  }
 //show result
  text(endResult, 10, 5);
}

//extra function to deal with loading images from user
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    userImg = createImg(file.data, '');
    userImg.hide();
  } else {
    userImg = null;
  }
}
  
