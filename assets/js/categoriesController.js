// thank you, http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service

mainApp.controller( "CategoriesController", [ "$scope", "dataFactory", function( $scope, dataFactory ) {

  $scope.listings; // used to store data for "Shop all items" section
  // $scope.jewelry;
  // $scope.home;
  $scope.necklaces;
  $scope.decor;
  $scope.beading;
  $scope.Partysupplies;
  $scope.Womensclothing;
  $scope.prints;
  $scope.earrings;
  // $scope.prints;
  // $scope.toys;
  // $scope.books;

  var numGets = 0; // count to see if factory is caching data or not

  getListings();
  // getJewelry();
  // getHome();
  getNecklaces();
  getDecor();
  getBeading();
  getPartysupplies();
  getWomensclothing();
  getPrints();
  getEarrings();
  // getPrints();
  // getBooks();

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
      },
      function( error ) {
        console.log( "Denied!!! " + error.message );
      });
  } // end getListings()

  // function to get jewelry
  // function getJewelry() {
  //   dataFactory.getJewelry()
  //     .then( function( response ) {
  //       $scope.jewelry = response.data.results[0].Images[0].url_fullxfull;
  //       console.log( response.data.results[0].Images[0].url_fullxfull );
  //       // console.log("jewelry pic " + $scope.jewelry.results );
  //     },
  //     function( error ) {
  //       console.log( "Denied!!! " + error.message );
  //     });
  // } // end getJewelry()

  // function to get home
  // function getHome() {
  //   dataFactory.getHome()
  //     .then( function( response ) {
  //       $scope.home = response.data.results[0].Images[0].url_fullxfull;
  //       console.log( response.data.results[0].Images[0].url_fullxfull  );
  //     },
  //     function( error ) {
  //       console.log( "Denied!!! " + error.message );
  //     });
  // } // end gethome()
// function to get Necklaces
function getNecklaces() {
  dataFactory.getNecklaces()
    .then( function( response ) {
      $scope.necklaces = response.data.results[0].Images[0].url_fullxfull;
      console.log( response.data.results[0].Images[0].url_fullxfull  );
    },
    function( error ) {
      console.log( "Denied!!! " + error.message );
    });
  }
// // end getNecklaces
// function to getDecor
function getDecor() {
  dataFactory.getDecor()
    .then( function( response ) {
      $scope.decor = response.data.results[0].Images[0].url_fullxfull;
      console.log( response.data.results[0].Images[0].url_fullxfull  );
    },
    function( error ) {
      console.log( "Denied!!! " + error.message );
    });
  }
// end getDecor
// function to get beading
function getBeading() {
  dataFactory.getBeading()
    .then( function( response ) {
      $scope.beading = response.data.results[0].Images[0].url_fullxfull;
      console.log( response.data.results[0].Images[0].url_fullxfull  );
    },
    function( error ) {
      console.log( "Denied!!! " + error.message );
    });
  }

function getPartysupplies() {
  dataFactory.getPartysupplies()
    .then( function( response ) {
      $scope.Partysupplies = response.data.results[0].Images[0].url_fullxfull;
      console.log( response.data.results[0].Images[0].url_fullxfull  );
    },
    function( error ) {
      console.log( "Denied!!! " + error.message );
    });
  }
// // end getPaper
function getWomensclothing() {
  dataFactory.getWomensclothing()
    .then( function( response ) {
      $scope.Womensclothing = response.data.results[0].Images[0].url_fullxfull;
      console.log( response.data.results[0].Images[0].url_fullxfull  );
    },
    function( error ) {
      console.log( "Denied!!! " + error.message );
    });
  }

// function to getEarrings
function getEarrings() {
  dataFactory.getEarrings()
    .then( function( response ) {
      $scope.earrings = response.data.results[0].Images[0].url_fullxfull;
      console.log( response.data.results[0].Images[0].url_fullxfull  );
    },
    function( error ) {
      console.log( "Denied!!! " + error.message );
    });
  }
// // end getEarrings
  // function to getPrints
  function getPrints() {
    dataFactory.getPrints()
      .then( function( response ) {
        $scope.prints = response.data.results[0].Images[0].url_fullxfull;
        console.log( response.data.results[0].Images[0].url_fullxfull  );
      },
      function( error ) {
        console.log( "Denied!!! " + error.message );
      });
    }
// // end getPrints


  $scope.goToProduct = function( listing ) {
        $scope.productClicked = $scope.listings.indexOf( listing );
        console.log( JSON.stringify($scope.listings[$scope.productClicked]) );
        localStorage.setItem( "productClicked", JSON.stringify($scope.listings[$scope.productClicked]));

  }; // end goToProduct()


}]); // end mainApp.controller( "CategoriesController" );
