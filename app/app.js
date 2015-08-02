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
controller('MainCtrl', ['$scope', 'RestaurantService', '$anchorScroll', function($scope, RestaurantService, $anchorScroll) {
  $scope.currentYear = new Date().getFullYear();
  $scope.RestaurantService = RestaurantService;

  RestaurantService.fetchRestaurants();

  $scope.scrollToAnchor = function(anchor) {
      $anchorScroll(anchor);
  }
}]);

