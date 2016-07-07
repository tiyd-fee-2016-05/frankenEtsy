var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider){
  $routeProvider

  .when ('/productpage', {
    templateUrl: 'pages/product.html',
    controller: 'productCtrl'
  })

  .otherwise({
    redirectTo: '/productpage'
    });

});
