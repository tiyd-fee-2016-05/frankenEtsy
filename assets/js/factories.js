mainApp.factory('trendingFactory', ['$http', '$scope', function() {
    //NEED TO RETURN API INFORMATION since factories need to return a value

    var apiKEY = "api_key=9l86gozghbufirehm13mtdky";
    var baseURL = "https://openapi.etsy.com/v2/listings/trending?";
    var variations = "includes=Shop,Images&";

    trendingFactory.getTrends = function() {
        return $http.get(baseURL + apiKEY);
    };

    return trendingFactory;

}]);
