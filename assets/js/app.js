<<<<<<< HEAD
var mainApp= angular.module("mainApp", ['ngRoute']);


=======
var mainApp= angular.module("mainApp", "homepageController" ['ngRoute']);
>>>>>>> 959be859b09c14ab5f2eff1dcd2654b8e7b959f2
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
