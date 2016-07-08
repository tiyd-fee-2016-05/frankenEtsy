mainApp.controller('factoryController', ['$http', '$scope', 'trendingFactory', function($http, $scope, trendingFactory) {

    $scope.getTrends = function() {
        trendingFactory.getTrends()
            .then(function(response) {
                $scope.trends = response.data;
            }, function(error) {
                console.log(error);
            });
    };

}]);
