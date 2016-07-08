etsyApp.controller("homepageController", ["$http", "$scope", function($http, $scope){
console.log("Hello!");
    $scope.message = "Whoever you are, find";
    console.log("it works!");
​
    $http.get("https://openapi.etsy.com/v2/listings/trending?includes=Shop,Images&api_key=nsh3xdn1xlab8cak8wsrh8f6").success(function(data){
      console.log("it's talking to the json.");
      $scope.content = data;
      console.log($scope.content);
​
​
    });
​
​

});
