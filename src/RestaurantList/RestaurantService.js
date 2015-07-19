angular.module('menuAppRestaurantList').service('RestaurantService', ['$http', function($http) {
    var alphaView = 'alpha',
        categoryView = 'category',
        service = this;

    this.setAlphaView = function() {
        service.currentView = alphaView;
    }

    this.setCategoryView = function() {
        service.currentView = categoryView;
    }

    this.loadRestaurantData = function() {
        // fetch server restaurant data
    };

    this.listingData = null;
    this.setAlphaView();
}]);
