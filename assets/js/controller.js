app.controller("homepageController", ["$http", "$scope", function($http, $scope){

    $scope.message = "angular!";
    console.log("it works!");

    $http.get("https://openapi.etsy.com/v2/taxonomy/buyer/get/?api_key=nsh3xdn1xlab8cak8wsrh8f6").success(function(data){
      console.log("it's talking to the json.");
      $scope.content = data;
      console.log($scope.content);


    });


    var contentID;

    $scope.showProdID = function(contentNum){
      contentID = contentNum;
      console.log("contentId =" + contentId);
    };



}]);
