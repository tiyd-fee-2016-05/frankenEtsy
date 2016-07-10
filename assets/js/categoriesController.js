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

// thank you, https://github.com/tiyd-fee-2016-05/demos/blob/master/angularjs-click-event/index.html for helping with this controller
mainApp.controller("Menu", function( $scope ) {
    $scope.showMenu0 = false;
    $scope.showMenu1 = false;
    $scope.showMenu2 = false;
    $scope.showMenu3 = false;
    $scope.showMenu4 = false;
    $scope.showMenu5 = false;
    $scope.showMenu6 = false;
    $scope.showMenu7 = false;
    $scope.showMenu8 = false;
    $scope.showMenu9 = false;
    $scope.showMenu10 = false;
    $scope.showMenu11 = false;

    $scope.revealMenu0 = function( listing ) {
      $scope.showMenu0 = !$scope.showMenu0;
      console.log( "Show menu is working.  Status: " + $scope.showMenu0 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu0 = function( listing ) {
      $scope.showMenu0 = !$scope.showMenu0;
    }

    $scope.revealMenu1 = function( listing ) {
      $scope.showMenu1 = !$scope.showMenu1;
      console.log( "Show menu is working.  Status: " + $scope.showMenu1 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu1 = function( listing ) {
      $scope.showMenu1 = !$scope.showMenu1;
    }

    $scope.revealMenu2 = function( listing ) {
      $scope.showMenu2 = !$scope.showMenu2;
      console.log( "Show menu is working.  Status: " + $scope.showMenu2 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu2 = function( listing ) {
      $scope.showMenu2 = !$scope.showMenu2;
    }

    $scope.revealMenu3 = function( listing ) {
      $scope.showMenu3 = !$scope.showMenu3;
      console.log( "Show menu is working.  Status: " + $scope.showMenu3 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu3 = function( listing ) {
      $scope.showMenu3 = !$scope.showMenu3;
    }

    $scope.revealMenu4 = function( listing ) {
      $scope.showMenu4 = !$scope.showMenu4;
      console.log( "Show menu is working.  Status: " + $scope.showMenu4 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu4 = function( listing ) {
      $scope.showMenu4 = !$scope.showMenu4;
    }

    $scope.revealMenu5 = function( listing ) {
      $scope.showMenu5 = !$scope.showMenu5;
      console.log( "Show menu is working.  Status: " + $scope.showMenu5 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu5 = function( listing ) {
      $scope.showMenu5 = !$scope.showMenu5;
    }

    $scope.revealMenu6 = function( listing ) {
      $scope.showMenu6 = !$scope.showMenu6;
      console.log( "Show menu is working.  Status: " + $scope.showMenu6 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu6 = function( listing ) {
      $scope.showMenu6 = !$scope.showMenu6;
    }

    $scope.revealMenu7 = function( listing ) {
      $scope.showMenu7 = !$scope.showMenu7;
      console.log( "Show menu is working.  Status: " + $scope.showMenu7 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu7 = function( listing ) {
      $scope.showMenu7 = !$scope.showMenu7;
    }

    $scope.revealMenu8 = function( listing ) {
      $scope.showMenu8 = !$scope.showMenu8;
      console.log( "Show menu is working.  Status: " + $scope.showMenu8 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu8 = function( listing ) {
      $scope.showMenu8 = !$scope.showMenu8;
    }

    $scope.revealMenu9 = function( listing ) {
      $scope.showMenu9 = !$scope.showMenu9;
      console.log( "Show menu is working.  Status: " + $scope.showMenu9 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu9 = function( listing ) {
      $scope.showMenu9 = !$scope.showMenu9;
    }

    $scope.revealMenu10 = function( listing ) {
      $scope.showMenu10 = !$scope.showMenu10;
      console.log( "Show menu is working.  Status: " + $scope.showMenu10 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu10 = function( listing ) {
      $scope.showMenu10 = !$scope.showMenu1011
    }

    $scope.revealMenu11 = function( listing ) {
      $scope.showMenu11 = !$scope.showMenu11;
      console.log( "Show menu is working.  Status: " + $scope.showMenu11 );
        // $scope.showMenu = true;
    }

    $scope.hideMenu11 = function( listing ) {
      $scope.showMenu11 = !$scope.showMenu11;
    }
}); // end controller( "Menu" )
