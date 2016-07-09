var mainApp= angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider){

  $routeProvider
    .when("/home",{
      templateUrl: 'pages/home.html'
      //controller: 'homepageController'

    })
    .otherwise({
      redirectTo: "/home"
    });

});
