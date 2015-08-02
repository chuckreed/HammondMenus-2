'use strict';

angular.module('MenuApp.restaurant-service', ['MenuApp.restaurant'])
    .service('RestaurantService', ['$http', function($http) {
        var restaurants;

        this.getRestaurants = function() {
            return $http.get('data.php');
        }
    }]);