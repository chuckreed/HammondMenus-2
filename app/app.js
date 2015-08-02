'use strict';

// Declare app level module which depends on views, and components
angular.module('MenuApp', [
  'ngRoute',
  'MenuApp.alpha-view',
  'MenuApp.category-view',
  'MenuApp.restaurant-directive',
  'MenuApp.restaurant-service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/alpha'});
}]).
controller('MainCtrl', ['$scope', 'RestaurantService', function($scope, RestaurantService) {
  $scope.currentYear = new Date().getFullYear();
  RestaurantService.getRestaurants().then(function(response) {
      $scope.restaurants = response.data.restaurants;
      $scope.letters = response.data.letters;
      $scope.categories = response.data.categories;
  });
}]);

