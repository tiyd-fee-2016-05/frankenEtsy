var mainApp = angular.module('mainApp', ['ngRoute']);
  mainApp.config(function($routeProvider){
    $routeProvider
    .when('/trending', {
      templateUrl: 'pages/trending.html'
    })
    .otherwise({
      redirectTo: '/trending'
    });
  });
