'use strict';

angular.module('MenuApp.restaurant-service', ['MenuApp.restaurant'])
    .service('RestaurantService', ['$http', function($http) {
        var directive;
        directive = this;
        this.currentView = 'alpha';

        this.enableAlphaView = function() {
            directive.currentView = 'alpha';
            this.navigationItems = this.letters;
        };

        this.enableCategoryView = function() {
            directive.currentView = 'category';
            this.navigationItems = this.categories;
        }

        this.fetchRestaurants = function(success) {
            $http.get('data.php').then(function(response) {
                directive.restaurants = response.data.restaurants;
                directive.letters = response.data.letters;
                directive.categories = response.data.categories;

                if (directive.currentView == 'alpha') {
                    directive.navigationItems = directive.letters;
                } else {
                    directive.navigationItems = directive.categories;
                }

                if (success) {
                    success.apply(directive, [response]);
                }
            });
        }
    }]);