angular.module('myApp', []);

var mainControllerFunction = function($scope){
  $scope.names = ['Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks'];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  // $scope.duplicates = [1,1,2,5,6,9,9,9];
  $scope.testObject = {name: 'Bradley', age: '25', likes: 'coding and such'};
};

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunction]);
