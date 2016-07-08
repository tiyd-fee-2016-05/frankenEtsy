var app= angular.module("mainApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when("/home",{
      templateUrl: 'pages/home.html'
      //controller: 'homepageController'

    })
    .otherwise({
      redirectTo: "/home"
    });

});
