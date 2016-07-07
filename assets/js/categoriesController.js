// thank you, http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service

mainApp.controller( "CategoriesController", [ "$scope", "dataFactory", function( $scope, dataFactory ) {

  $scope.listings; // used to store data for "Shop all items" section
  var numGets = 0; // count to see if factory is caching data or not

  getListings();

  // function to get items for "Shop all items"
  function getListings() {
    dataFactory.getListings()
      .then( function( response ) {

        console.log( "Do something!!!" );
        $scope.listings = response.data;
        numGets++;
        console.log( "Here are your listings: " + $scope.listings.results ); // log all data for each listing
        console.log( "Here is your photo: " + $scope.listings.results[0].Images[0].url_570xN ); // log photo for first listing
        console.log( "Here is your price: " + $scope.listings.results[0].price ); // log price for first listing
        console.log( "Here is your description: " + $scope.listings.results[0].description ); // log price for first listing
        console.log( "Here is your url: " + $scope.listings.results[0].url ); // log price for first listing
        console.log( numGets );
      },
      function( error ) {
        console.log( "Denied!!! " + error.message );
      });
  } // end getListings()
}]); // end mainApp.controller( "CategoriesController" );
