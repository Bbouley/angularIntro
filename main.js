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

app.controller('exercisesController', ['$scope', exercisesControllerFunction]);

app.controller('secondController', ['$scope', secondControllerFunction]);

app.controller('mainController', ['$scope', mainControllerFunction]);
