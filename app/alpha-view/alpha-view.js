'use strict';

angular.module('MenuApp.alpha-view', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/alpha', {
            templateUrl: 'alpha-view/alpha-view.html',
            controller: 'AlphaViewCtrl'
        });
    }])

    .controller('AlphaViewCtrl', [function() {

    }]);
