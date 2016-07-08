
etsyApp.controller("homepageController", ["$http", "$scope", function($http, $scope){
console.log("Hello!");
    $scope.message = "Whoever you are, find";
    console.log("it works!");
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=whiskey&includes=Images,Shop&limit=12&offset=0").then(function(response){
      console.log("it's talking to the json.");
      $scope.info = response.data;
      console.log($scope.info.results[0].Images[0].url_fullxfull);
    });
    var contentID;
    $scope.showProdID = function(contentNum){
      contentID = contentNum;
      console.log("contentId =" + contentId);
    };

}]);
