// thank you, http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service, for your help!!!

  mainApp.factory( "dataFactory", [ "$http", function( $http ) {

  var listingsUrl = "https://openapi.etsy.com/v2/listings/active?includes=MainImage,Shop&api_key=8ehgwfe57rb8jl60hnt04nom";
  var listingUrl = "https://openapi.etsy.com/v2/listings/:";
  var categoriesUrl = "https://openapi.etsy.com/v2/taxonomy/buyer/get?includes=MainImage&api_key=8ehgwfe57rb8jl60hnt04nom";

  var dataFactory = {};
  // var dataReceived = false;

  dataFactory.getListings = function() {
    return $http.get( listingsUrl );
  };

  dataFactory.getListing = function( id ) {
    return $http.get( listingUrl + id + "&api_key=8ehgwfe57rb8jl60hnt04nom" );
  };

  return dataFactory;
}]); // end mainApp.factory
