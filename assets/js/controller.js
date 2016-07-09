mainApp.controller("homepageController",["$scope", "dataFactory", function($scope, dataFactory){
console.log("working");


$scope.Home;
$scope.Jewelry;


getHome();
getjewelry();


function getHome(){
  dataFactory.getHome().then(function(response){
      $scope.Home = response.data.results;
      console.log($scope.home.results);

    });


}

function getJewerly(){
  dataFactory.getJewerly().then(function(response){
    $scope.Jewelry = response.data.results;
    consolo.log($scope.Jewelry.results);



  });
}



}]);

















// etsyApp.controller("homepageController", ["$http", "$scope", function($http, $scope){
// console.log("Hello!");
//     $scope.message = "Whoever you are, find";
//
//     console.log("it works!");
//     $http.get("https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=jewelry&includes=Images,Shop&limit=12&offset=0").then(function(response){
//       console.log("it's talking to the json.");
//       $scope.info = response.data.results;
//       // console.log($scope.info);
//       console.log($scope.info);
//       // var images
//     });
//     var contentID;
//     $scope.showProdID = function(contentNum){
//       contentID = contentNum;
//       console.log("contentId =" + contentId);
//     };
//
// }]);
