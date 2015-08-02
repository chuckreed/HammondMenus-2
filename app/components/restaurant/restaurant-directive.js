'use strict';

angular.module('MenuApp.restaurant-directive', ['MenuApp.restaurant'])
    .directive('restaurant', function() {
        return {
            link: function() {

            },
            scope: {
                model: '='
            },
            transclude: true
        };
    });
