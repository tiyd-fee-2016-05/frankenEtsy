var etsyApp= angular.module("etsyApp", ['ngRoute']);

etsyApp.config(function($routeProvider){
  $routeProvider
    .when("/home",{
      templateUrl: 'pages/home.html'
      //controller: 'homepageController'

    })
    .otherwise({
      redirectTo: "/home"
    });

});
