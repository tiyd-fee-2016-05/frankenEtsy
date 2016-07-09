mainApp.controller('trendingController', ['$http', '$scope', function($http, $scope) {

//FIRST CALL
            //https://openapi.etsy.com/v2/listings/trending?limit=40&offset=0&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky

//SECOND CALL
            //https://openapi.etsy.com/v2/listings/trending?limit=40&offset=40&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky

//THIRD CALL
            //https://openapi.etsy.com/v2/listings/trending?limit=40&offset=80&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky

//FOURTH CALL
            //https://openapi.etsy.com/v2/listings/trending?limit=40&offset=120&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky


    $http({
      method: 'GET',
      url: 'https://openapi.etsy.com/v2/listings/trending?limit=40&offset=0&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky'
    }).then(function firstCall(first){
        $scope.callOne = first.data.results;
        console.log(first);                     //returns the entire response as an object

        // var first40 = first.data.results;          //first40 now is assigned the ARRAY OF OBJECTS (aka first 40 results)
        // console.log(first40[0].listing_id);

        $scope.catchId = function(click){
          localStorage.setItem('listing_id',click);
          console.log(click);
        };
    });


    //second api call. triggered by button as of saturday, 7/9
    var count = 0;

    $('#loadMore').click(function(e) {
      e.preventDefault();
      count++;
      lazyLoad(count);
      console.log(count);
    });


    function lazyLoad(count){

        switch (count) {


            case 1:
              console.log(count);
                $http({
                    method: 'GET',
                    url: 'https://openapi.etsy.com/v2/listings/trending?limit=40&offset=40&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky'
                }).then(function secondCall(second) {
                    $scope.callTwo = second.data.results;
                    console.log(second);
                });
                $scope.catchId = function(click){
                  localStorage.setItem('listing_id',click);
                  console.log(click);
                };
                break;
            case 2:
            console.log(count);

                $http({
                    method: 'GET',
                    url: 'https://openapi.etsy.com/v2/listings/trending?limit=40&offset=80&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky'
                }).then(function thirdCall(third) {
                    $scope.callThree = third.data.results;
                    console.log(third);
                });
                $scope.catchId = function(click){
                  localStorage.setItem('listing_id',click);
                  console.log(click);
                };
                break;
            case 3:
            console.log(count);

                $http({
                    method: 'GET',
                    url: 'https://openapi.etsy.com/v2/listings/trending?limit=40&offset=120&includes=Shop,Images&api_key=9l86gozghbufirehm13mtdky'
                }).then(function fourthCall(fourth) {
                    $scope.callFour = fourth.data.results;
                    console.log(fourth);
                });
                $scope.catchId = function(click){
                  localStorage.setItem('listing_id',click);
                  console.log(click);
                };
                break;
        }
}
}]);
