var mainApp = angular.module( "mainApp", ["ngRoute"] );

mainApp.config( function( $routeProvider ) {
  $routeProvider

  .when( "/categories", {
    templateUrl: "pages/categories.html",
  })
  .otherwise( {
    redirectTo: "/categories"
  });
}) // end main.App.config
