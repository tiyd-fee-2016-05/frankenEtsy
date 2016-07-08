// thank you, http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service

mainApp.controller( "CategoriesController", [ "$scope", "dataFactory", function( $scope, dataFactory ) {

  $scope.listings; // used to store data for "Shop all items" section
  $scope.shops;
  var numGets = 0; // count to see if factory is caching data or not

  getListings();

  // function to get items for "Shop all items"
  function getListings() {
    dataFactory.getListings()
      .then( function( response ) {
        console.log( "Do something!!!" );
        $scope.listings = response.data.results;
        numGets++;
        console.log( "Here are your listings: " + $scope.listings ); // log all data for each listing
        console.log( "Here is your photo: " + $scope.listings[0].MainImage.url_570xN ); // log photo for first listing
        console.log( "Here is your price: " + $scope.listings[0].price ); // log price for first listing
        console.log( "Here is your description: " + $scope.listings[0].description ); // log price for first listing
        console.log( "Here is your url: " + $scope.listings[0].url ); // log price for first listing
        console.log( numGets );
        getListing( $scope.listings );
      },
      function( error ) {
        console.log( "Denied!!! " + error.message );
      });
  } // end getListings()

  // function to get shop names
  function getListing( listings ) {
    console.log( listings );
    dataFactory.getListing( listings.listing_id )
      .then( function( response ) {
        $scope.shops = response.data;
        console.log( $scope.shops );
      },
      function( error ) {
        console.log( "Denied!!! " + error.message );
      });
  } // end getListing()




}]); // end mainApp.controller( "CategoriesController" );
