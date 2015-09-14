var app = angular.module('myApp', []);

var mainControllerFunction = function($scope){
  $scope.names = ['Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks'];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  // $scope.duplicates = [1,1,2,5,6,9,9,9];
  $scope.testObject = {name: 'Bradley', age: '25', likes: 'coding and such'};
  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ];
};

var secondControllerFunction = function($scope){
  $scope.name = 'Severus Snape';
};

var exercisesControllerFunction = function($scope){
  $scope.favColour = 'purple';
  $scope.secondsInACentury = 100*365*24*60*60;
  $scope.timeNow = Date.now();
};

var madlibsControllerFunction = function($scope){
  $scope.madlibs = {madlibsName : '', madlibsAdjective : '', madlibsPluralNoun : '', madlibsAnimal : '', madlibsPluralNoun2 : '', madlibsVerb : ''};
};

var thirdControllerFunction = function($scope){
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random()*10)+1;
  };
  $scope.stringInput = '';
  $scope.reverseString = function(string){
    var array = string.split('');
    var reverseArray = [];
    for (var i = array.length-1; i >= 0; i--) {
      reverseArray.push(array[i]);
    }
    var wordReversed = reverseArray.join('');
    $scope.stringInput = wordReversed;
  };
};

var fourthControllerFunction = function($scope){

  $scope.player1Wins = false;
  $scope.player2Wins = false;
  $scope.clicks = 0;
  $scope.player1Score = 0;
  $scope.player2Score = 0;
  $scope.player1Serving = true;
  $scope.player2Serving = false;

  $scope.checkWinner = function(){
    if($scope.player1Score >= 11){
      $scope.player1Wins = true;
      $scope.player1Score = 11;
    }
    if ($scope.player2Score >= 11){
      $scope.player2Wins = true;
      $scope.player2Score = 11;
    }
  };

  $scope.anyClick = function(){
    $scope.clicks += 1;
  };
  $scope.serving = function(){
    if($scope.clicks%2 === 0){
      if($scope.player1Serving === false){
        $scope.player1Serving = true;
        $scope.player2Serving = false;
      } else if ($scope.player1Serving === true){
        $scope.player1Serving = false;
        $scope.player2Serving = true;
      }
    }
  };
  $scope.player1Click = function(){
    $scope.player1Score += 1;
  };
  $scope.player2Click = function(){
    $scope.player2Score += 1;
  };
  $scope.reset = function(){
    $scope.clicks = 0;
    $scope.player1Score = 0;
    $scope.player2Score = 0;
    $scope.player1Serving = true;
    $scope.player2Serving = false;
    $scope.player1Wins = false;
    $scope.player2Wins = false;
  };
};

app.controller('fourthController', ['$scope', fourthControllerFunction]);

app.controller('thirdController', ['$scope', thirdControllerFunction]);

app.controller('madlibsController', ['$scope', madlibsControllerFunction]);

app.controller('exercisesController', ['$scope', exercisesControllerFunction]);

app.controller('secondController', ['$scope', secondControllerFunction]);

app.controller('mainController', ['$scope', mainControllerFunction]);
