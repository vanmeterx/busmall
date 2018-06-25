'use strict';
var maxVotes = 25;
var voteCount = 0;

var lastViewed = [];

function getRandomImage() {
  var nextIndex = Math.floor(Math.random() * ImageChoice.all.length);
  return ImageChoice.all[nextIndex];
}


function displayImages(){
  var imageOne = document.getElementById('imageOne');
  var imageTwo = document.getElementById('imageTwo');
  var imageThree = document.getElementById('imageThree');

  do {
    var randImg1 = getRandomImage();
  } while (lastViewed.includes(randImg1));
  lastViewed.push(randImg1);

  do {
    var randImg2 = getRandomImage();
  } while (lastViewed.includes(randImg2));
  lastViewed.push(randImg2);

  do {
    var randImg3 = getRandomImage();
  } while (lastViewed.includes(randImg3));
  lastViewed.push(randImg3);

  if (lastViewed.length > 3) {
    lastViewed.splice(0, 3);
  }

  imageOne.src = randImg1.src;
  imageTwo.src = randImg2.src;
  imageThree.src = randImg3.src;

  imageOne.currentImage = randImg1;
  imageTwo.currentImage = randImg2;
  imageThree.currentImage = randImg3;

  randImg1.timesViewed += 1;
  randImg2.timesViewed += 1;
  randImg3.timesViewed += 1;

}


console.log(ImageChoice.all);

var clickContainer = document.getElementById('click-container');

clickContainer.addEventListener('click', function (event) {
  if (event.target.tagName !== 'IMG') {
    return;
  }

  voteCount++;
  console.log('click number ' + voteCount);

  if (voteCount > maxVotes) {
    showResultChart();
    return;
  }

  var currentImage = event.target.currentImage;

  // Record the click on that ImageChoice
  currentImage.timesClicked++;

  // Log to ensure the click was tracked
  console.log('click', currentImage);

  // Voting done, get more images
  displayImages();
});


function ImageChoice (name, src){
  this.name = name;
  this.src = src;
  this.timesViewed = 0;
  this.timesClicked = 0;
  ImageChoice.all.push(this);
}
ImageChoice.all = [];

function initialize() {
  new ImageChoice('r2d2Bag', 'img/bag.jpg');
  new ImageChoice('banana', 'img/banana.jpg');
  new ImageChoice('bathroom', 'img/bathroom.jpg');
  new ImageChoice('boots', 'img/boots.jpg');
  new ImageChoice('breakfast', 'img/breakfast.jpg');
  new ImageChoice('bubblegum', 'img/bubblegum.jpg');
  new ImageChoice('chair', 'img/chair.jpg');
  new ImageChoice('cthulhu', 'img/cthulhu.jpg');
  new ImageChoice('dogDuck', 'img/dog-duck.jpg');
  new ImageChoice('dragonMeat', 'img/dragon.jpg');
  new ImageChoice('pen', 'img/pen.jpg');
  new ImageChoice('petSweeper', 'img/pen.jpg');
  new ImageChoice('scissors', 'img/scissors.jpg');
  new ImageChoice('shark', 'img/shark.jpg');
  new ImageChoice('tauntaun', 'img/tauntaun.jpg');
  new ImageChoice('unicornMeat', 'img/unicorn.jpg');
  new ImageChoice('usbTentacle', 'img/usb.gif');
  new ImageChoice('wateringCan', 'img/water-can.jpg');
  new ImageChoice('wineGlass', 'img/wine-glass.jpg');
  displayImages();
}
initialize();



function showResultChart() {
  var canvas = document.getElementById('resultsCanvas');

  canvas.style.display = 'block';

  var labels = [];
  var voterCounts = [];
  var showCounts = [];
  var votePercent = [];

  for (var i = 0; i < ImageChoice.all.length; i++) {
    labels [i] = ImageChoice.all[i].name;
    voterCounts [i] = ImageChoice.all[i].voterCounts;
    showCounts [i] = ImageChoice.all[i].showCounts;
    votePercent[i] = 100 * voterCounts[i] / showCounts[i];
  }

  var ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',

    data: {
      labels: labels,
      datasets: [
        {
          label: 'Vote Count',
          backgroundColor: '593C8F',
          data: voterCounts
        },
        {
          label:'Show Count',
          backgroundColor: '#DB5461',
          data: showCounts
        },
        {
          label: 'Vote %',
          data: votePercent
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }
        ]
      },
      title: {
        display: true,
        text: 'Voting Results'
      }
    }
  });
}

var reset = document.querySelector('button[type="reset"]');

reset.addEventListener('click', function resetClick(event){
  console.log('reset click', event);
  initialize();
  displayImages();
});