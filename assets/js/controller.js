etsyApp.controller("homepageController", ["$http", "$scope", function($http, $scope){
console.log("Hello!");
    $scope.message = "Whoever you are, find";
    // console.log("it works!");​
    $http.get("https://api.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&category=supplies&keywords=bicycles&includes=Images,Shop").success(function(response){
      console.log("it's talking to the json.");
      // $scope.info = data;
      $scope.info.results = response;
      console.log($scope.info.results[0].Images[0].url_fullxfull);
      console.log("it works");
      // console.log(data);​
    });




  }]);
