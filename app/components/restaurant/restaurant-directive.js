'use strict';

angular.module('MenuApp.restaurant-directive', ['MenuApp.restaurant'])
    .directive('restaurant', function() {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            templateUrl: 'components/restaurant/restaurant.html'
        };
    });
