var mainApp = angular.module('mainApp', ['ngRoute']);
  mainApp.config(function($routeProvider){
    $routeProvider
    .when('/trending', {
      templateUrl: 'pages/header/home_header.html'
    })
    .otherwise({
      redirectTo: '/trending'
    });
  });
