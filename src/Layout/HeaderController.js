angular.module('menuAppLayout').controller('HeaderController', function($scope, RestaurantService) {

    $scope.sortByAlpha = function() {
        RestaurantService.setAlphaView();
    };

    $scope.sortByCategory = function() {
        RestaurantService.setCategoryView();
    };

    $scope.getCurrentView = function() {
        return RestaurantService.currentView;
    }
});
