app.controller("homepageController", ["$http", "$scope", function($http, $scope){

    $scope.message = "angular!";
    console.log("it works!");

    $http.get("http//localhost:3007/db").success(function(data){
      console.log("it's talking to the json.");
      $scope.content = data;


    });


    var contentID;

    $scope.showProdID = function(contentNum){
      contentID = contentNum;
      console.log("contentId =" + contentId);
    };



}]);
