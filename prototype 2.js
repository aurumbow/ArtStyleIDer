//set up un-class-locked variables
 //create KNNClassifier
const classifier = ml5.KNNClassifier();
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
    classifier.load("path"); //replace "path" with the path to the JSON file
    classifier.classify(userImg, function(err, result) {
      console.log(result); // result.label is the predicted label
      endResult = result;
    });
  });

//loading images
  var cubism = [createImg('assets/cubism/1.jpg'),
                createImg('assets/cubism/2.jpg'),
                createImg('assets/cubism/3.jpg'), 
                createImg('assets/cubism/4.jpg'),
                createImg('assets/cubism/5.jpg'),
                createImg('assets/cubism/6.jpg'),
                createImg('assets/cubism/7.jpg'),
                createImg('assets/cubism/8.jpg'),
                createImg('assets/cubism/9.jpg'),
                createImg('assets/cubism/10.jpg'),
                createImg('assets/cubism/11.jpg'),
                createImg('assets/cubism/12.jpg'),

  var realism = [createImg('assets/realism/1.jpg'),
                createImg('assets/realism/2.jpg'),
                createImg('assets/realism/3.jpg'), 
                createImg('assets/realism/4.jpg'),
                createImg('assets/realism/5.jpg'),
                createImg('assets/realism/6.jpg'),
                createImg('assets/realism/7.jpg'),
                createImg('assets/realism/8.jpg'),
                createImg('assets/realism/9.jpg'),
                createImg('assets/realism/10.jpg'),
                createImg('assets/realism/11.jpg'),
                createImg('assets/realism/12.jpg'),

  var impressionism = [createImg('assets/impressionism/1.jpg'),
                createImg('assets/impressionism/2.jpg'),
                createImg('assets/impressionism/3.jpg'), 
                createImg('assets/impressionism/4.jpg'),
                createImg('assets/impressionism/5.jpg'),
                createImg('assets/impressionism/6.jpg'),
                createImg('assets/impressionism/7.jpg'),
                createImg('assets/impressionism/8.jpg'),
                createImg('assets/impressionism/9.jpg'),
                createImg('assets/impressionism/10.jpg'),
                createImg('assets/impressionism/11.jpg'),
                createImg('assets/impressionism/12.jpg'),

  for (var i = 0; i < cubism.length, i++){
  //since ALL the classifiers are being done in the same loop
  //each category MUST have same number of images
    {
      //making sure all the images are loaded properly
    console.log(cubism[i])
    console.log(realism[i])
    console.log(impressionism[i])

    //telling computer 'whats in here (cubism[i])' is cubism'
    classifier.addExample( cubism[i], 'Cubism'); 
    //telling computer 'whats in here (realism[i])' is realism'
  classifier.addExample( realism[i], 'Realism');
//telling computer 'whats in here (impressionism[i])' is impressionism'
  classifier.addExample( impressionism[i], 'Impressionism');
    }

//add a for loop
//telling computer 'whats in here (realism[i]' is realism'
classifier.addExample( realism[i], 'Realism');
//telling computer 'whats in here (impressionism[i]' is impressionism'
classifier.addExample( impressionism[i], 'Impressionism');
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
  
