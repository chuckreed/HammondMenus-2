'use strict';

// Declare app level module which depends on views, and components
angular.module('MenuApp', [
  'ngRoute',
  'MenuApp.alpha-view',
  'MenuApp.category-view',
  'MenuApp.restaurant'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/alpha'});
}]);
//.value('currentYear');