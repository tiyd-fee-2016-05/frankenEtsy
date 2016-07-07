// thank you, http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service, for your help!!!

  mainApp.factory( "dataFactory", [ "$http", function( $http ) {

  var listingsUrl = "https://openapi.etsy.com/v2/listings/active?includes=MainImage,about&api_key=8ehgwfe57rb8jl60hnt04nom";
  // var listingsUrl = "https://openapi.etsy.com/v2/listings/trending&api_key=8ehgwfe57rb8jl60hnt04nom";
  // var
  var dataFactory = {};
  // var dataReceived = false;

  dataFactory.getListings = function() {
    return $http.get( listingsUrl );
  };

  dataFactory.getListing = function() {
    return $http.get( listingsUrl + "/" + id );
  };

  return dataFactory;
}]); // end mainApp.factory
