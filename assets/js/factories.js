mainApp.factory('trendingFactory', ['$http', '$rootScope', function($http, $rootScope) {
    //NEED TO RETURN API INFORMATION since factories need to return a value

    var trendingFactory = [];

    // var apiKEY = "api_key=9l86gozghbufirehm13mtdky";
    // var baseURL = "https://openapi.etsy.com/v2/listings/trending?";
    // var variations = "includes=Shop,Images&";

    trendingFactory.getTrends = function() {
        return $http.get("https://openapi.etsy.com/v2/listings/trending?limit=40&offset=0&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky");
    };

    return trendingFactory;
}]);
