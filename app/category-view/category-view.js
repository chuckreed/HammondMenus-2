'use strict';

angular.module('MenuApp.category-view', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('category', {
            templateUrl: 'category-view/category-view.html',
            controller: 'CategoryViewCtrl'
        });
    }])

    .controller('CategoryViewCtrl', [function() {

    }]);
