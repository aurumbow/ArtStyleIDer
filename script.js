//uses knn to fill a json file with example images
//uses an imageclassifier trained on that json file to classify an input image

//declare program-wide variables
//classifiers
const knnClassifier = ml5.KNNClassifier();
const imgClassifier = ml5.imageClassifier('assets/artknn.json', modelReady);
//input and button variables
let input;
let userImg;
let goButton;
let endResult;

function modelReady(){
  //load the json file
  //create images
  var cubismImgs = [createImage('assets/Cubism/1.jpg'),
                    createImage('assets/Cubism/2.jpg'),
                    createImage('assets/Cubism/3.jpg'),
                    createImage('assets/Cubism/4.jpg'),
                    createImage('assets/Cubism/5.jpg'),
                    createImage('assets/Cubism/6.jpg'),
                    createImage('assets/Cubism/7.jpg'),
                    createImage('assets/Cubism/8.jpg'),
                    createImage('assets/Cubism/9.jpg'),
                    createImage('assets/Cubism/10.jpg'),
                    createImage('assets/Cubism/11.jpg'),
                    createImage('assets/Cubism/12.jpg')];
  
  var realismImgs = [createImage('assets/Realism/1.jpg'),
                     createImage('assets/Realism/2.jpg'),
                     createImage('assets/Realism/3.jpg'),
                     createImage('assets/Realism/4.jpg'),
                     createImage('assets/Realism/5.jpg'),
                     createImage('assets/Realism/6.jpg'),
                     createImage('assets/Realism/7.jpg'),
                     createImage('assets/Realism/8.jpg'),
                     createImage('assets/Realism/9.jpg'),
                     createImage('assets/Realism/10.jpg'),
                     createImage('assets/Realism/11.jpg'),
                     createImage('assets/Realism/12.jpg')];
  
  var impressionismImgs = [createImage('assets/Impressionism/1.jpg'),
                           createImage('assets/Impressionism/2.jpg'),
                           createImage('assets/Impressionism/3.jpg'),
                           createImage('assets/Impressionism/4.jpg'),
                           createImage('assets/Impressionism/5.jpg'),
                           createImage('assets/Impressionism/6.jpg'),
                           createImage('assets/Impressionism/7.jpg'),
                           createImage('assets/Impressionism/8.jpg'),
                           createImage('assets/Impressionism/9.jpg'),
                           createImage('assets/Impressionism/10.jpg'),
                           createImage('assets/Impressionism/11.jpg'),
                           createImage('assets/Impressionism/12.jpg')];
  
  //the actual loading
  for (var i = 0; i < 12; i++){
    //at each step, the computr logs 1 example of each style
    knnClassifier.addExample(cubismImgs[i], 'Cubism');
    knnClassifier.addExample(realismImgs[i], 'Realism');
    knnClassifier.addExample(impressionismImgs[i], 'Impressionism');
  }
  //its loaded!
  console.log("model loaded");
}

//js setup
function setup(){
  createCanvas(900, 900);
  //input setup
  input = createFileInput(handleFile);
  input.position(0, 0);
  //button setup
  goButton = createButton("ID this Image!");
  goButton.mousePressed(function(){
    //classifies the image
    imgClassifier.classify(userImg, function(err, results){
      console.log('result: ' + results);
      endResult = results;
    });
  });
}

//output!
function draw(){
   background(255);
 //show users image
  if (userImg) {
    image(userImg, 10, 20, width, height);
  }
 //show result
  text(endResult, 10, 5);
}

//function that handles input
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    userImg = createImg(file.data, '');
    userImg.hide();
  } else {
    userImg = null;
  }
}
  
  
