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

    // $scope.catchId = function (){
    //   $scope.listing = this;
    //   console.log(callOne.data.results.listing.listing_id);
    //
    // };

}]);


//USED NG-IF INSTEAD......
        // curCode will equal the results of all the currency_codes from the API call
        // var currCode;
        // var euro = 'EUR';
        // var dolla = 'USD';
        //
        //
        // if(currCode == euro){
        //   return '&#128;';
        // } else if (currCode == dolla){
        //   return '&#36;';
        // }
