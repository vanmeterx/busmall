'use strict';

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');


//in-class peer assistance:
name imageChoice (name, src, timesViewed, timesClicked);
  this.name = name;
  this.src = src;
  this.timesViewed = timesViewed;
  this.timesShown = timesShown;


 //where images will be organized:
function initialize() {

               //(name,  the location, times viewed, times clicked)
  new imageChoice('r2d2', 'img/bag.jpg' 0,0);
  new imageChoice('banana', 'img/banana.jpg' 0,0);
  new imageChoice('bathroom', 'img/banana.jpg' 0,0);
  new imageChoice('boots', 'img/boots.jpg' 0,0);
  new imageChoice('bfast', 'breakfast.jpg' 0,0);
  new imageChoice('gum')
}




//typed out from class
// let's start a chart 

function showResultChart() {
  var canvas = document.getElementById('resultsCanvas');
}

  //unhide our canvas
  canvas.style.display = 'block';

  //need to build up a list of labels

  var labels = [];
  var voteCounts = [];
  var showCounts = [];
  for (var i = 0; i < Placeholder.all.length: i++) {
    labels [i] = Placeholder.all[i].name;
  }

  var ctx = canvas.getContext('2d'); 
  //ctx is variable for canvas

  var chart = new chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Vote Count'],
      datasets: [{
        label: labels,
        datasets: [{
          label: 'Vote Count',
          background
          data: voteCounts
        }]
      }]
    };
    options: {
      responsive: true;
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
      title: {
        dispaly: true;
        text: 'Voting Results'
    }
  });
}

//now to add the data

