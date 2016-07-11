var mainApp= angular.module("mainApp", ['ngRoute']);
mainApp.controller("homepageController", ["$http", "$scope", function($http, $scope){
console.log("Hello!");
    $scope.message = "Whoever you are, find";
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=clothing&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.clothingInfo = response.data.results;
      console.log($scope.clothingInfo[0].Images[0].url_fullxfull);
      // $scope.clothingInfo.Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=children&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.childrenInfo = response.data.results;
      console.log($scope.childrenInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=yarn&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.yarnInfo = response.data.results;
      console.log($scope.yarnInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=weddings&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.weddingInfo = response.data.results;
      console.log($scope.weddingInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=entertainment&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.entertainmentInfo = response.data.results;
      console.log($scope.entertainmentInfo[0].Images[2].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=home&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.homeInfo = response.data.results;
      console.log($scope.homeInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=jewelry&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.jewelryInfo = response.data.results;
      console.log($scope.jewelryInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=bikes&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.bikesInfo = response.data.results;
      console.log($scope.bikesInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=accessories&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.accessoriesInfo = response.data.results;
      console.log($scope.accessoriesInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=baby&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.babyInfo = response.data.results;
      console.log($scope.babyInfo[0].Images[0].url_fullxfull);
    });
    $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=fun&includes=Images,Shop&limit=10&offset=0").then(function(response){
      $scope.toyInfo = response.data.results;
      console.log($scope.toyInfo[0].Images[0].url_fullxfull);
    });
}]);
