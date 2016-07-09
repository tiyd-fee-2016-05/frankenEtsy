
etsyApp.controller("homepageController", ["$http", "$scope", function($http, $scope){
console.log("Hello!");
    $scope.message = "Whoever you are, find";
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=clothing&includes=Images,Shop&limit=3&offset=0").then(function(response){
      $scope.clothingInfo = response.data.results;
      console.log($scope.clothingInfo[0].Images[0].url_fullxfull);
      // $scope.clothingInfo.Images[0].url_fullxfull);
    });

    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=children&includes=Images,Shop&limit=3&offset=0").then(function(response){
      $scope.childrenInfo = response.data.results;
      console.log($scope.childrenInfo[0].Images[0].url_fullxfull);
    });

    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=yarn&includes=Images,Shop&limit=3&offset=0").then(function(response){
      $scope.yarnInfo = response.data.results;
      console.log($scope.yarnInfo[0].Images[0].url_fullxfull);
    });

    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=weddings&includes=Images,Shop&limit=3&offset=0").then(function(response){
      $scope.weddingInfo = response.data.results;
      console.log($scope.weddingInfo[0].Images[0].url_fullxfull);

    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=entertainment&includes=Images,Shop&limit=3&offset=0").then(function(response){
      $scope.entertainmentInfo = response.data.results;
      console.log($scope.entertainmentInfo[0].Images[0].url_fullxfull);
    });

    // $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=home&includes=Images,Shop&limit=3&offset=0").then(function(response){
    //   console.log("Grabbing from home.");
    //   $scope.homeInfo = response.data;
    //   console.log($scope.homeInfo.results[0].Images[0].url_fullxfull);
    // });
    // var contentID;
    // $scope.showProdID = function(contentNum){
    //   contentID = contentNum;
    //   console.log("contentId =" + contentId);
    // };

}]);
