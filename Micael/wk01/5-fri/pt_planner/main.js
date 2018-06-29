var origin = 'Burnley';
var destination = 'Flagstaff';

var linesArray = 
  {
    alameinLine: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
    glenLine: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringhamLine: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'],
  };

var startingPoint = [];
var finishingPoint = [];
var allLines = Object.keys(linesArray);

var userJourney = [];

function detectLine(station,journeyPosition) {
  allLines.forEach(function(line){
    if (linesArray[line].indexOf(station) != -1) {
      journeyPosition.push(line);
      journeyPosition.push(linesArray[line].indexOf(station));
    }
  })
}

detectLine(origin, startingPoint);
detectLine(destination, finishingPoint);

  if (linesArray[finishingPoint[0]].indexOf(origin) != -1) {
    var transferStation = linesArray[finishingPoint[0]].indexOf(origin);
    if (finishingPoint[1] < startingPoint[1]) {
      for (i = 0; i <= Math.abs((finishingPoint[1] - transferStation)); i++) {
        userJourney.push(linesArray[finishingPoint[0]][Math.abs(i - transferStation)])
      } 
    } else {
      for (i = 0; i <= Math.abs((finishingPoint[1] - transferStation)); i++) {
        userJourney.push(linesArray[finishingPoint[0]][Math.abs(i + transferStation)])
      }
    }
  } else {
    linesArray[startingPoint[0]].forEach(function(element, idx){
      if (linesArray[finishingPoint[0]].indexOf(element) != -1){
        connectionName = element;
        connection = idx;
        connectionExit = linesArray[finishingPoint[0]].indexOf(linesArray[startingPoint[0]][connection]);
      }
    })

    for (i = 0; i < Math.abs((connection - startingPoint[1])); i++) {
      userJourney.push(linesArray[startingPoint[0]][Math.abs(startingPoint[1] - i)]) 
    }
    if (connectionExit > finishingPoint[1]){
      for (i = 0; i <= Math.abs(finishingPoint[1] - connectionExit); i++) {
        userJourney.push(linesArray[finishingPoint[0]][Math.abs(-i + connectionExit)])
      }
    } else {
      for (i = 0; i <= Math.abs(finishingPoint[1] - connectionExit); i++){
        userJourney.push(linesArray[finishingPoint[0]][Math.abs(i + connectionExit)])
      }
    }  
  }


  console.log(userJourney.join(' --> '));


