mainApp.controller('productCtrl', function($scope, $http, $sce) {
  $http({
    method: 'GET',
    url: 'https://openapi.etsy.com/v2/listings/'+ 175112598 + '?includes=Shop&api_key=9tojngbsrbfw4ezg2zfrrqvo'
  }).then(function successCallback(response){
    $scope.product = response.data;
    $scope.desc = response.data.results[0].description;
    $scope.price = response.data.results[0].price;
    $scope.title = response.data.results[0].title;
    $scope.views = response.data.results[0].views;
    $scope.favorers = response.data.results[0].num_favorers;
    // for (var i = 0; i < response.data.results[0].materials.length; i++) {
    // console.log(i);
    $scope.materials = response.data.results[0].materials;
    $scope.material= $scope.materials.toString();
    $scope.listedOn = response.data.results[0].last_modified_tsz;
    $scope.tPath = response.data.results[0].taxonomy_path;
    $scope.tags = response.data.results[0].tags;
    $scope.quantity = response.data.results[0].quantity;
    $scope.shopName = response.data.results[0].Shop.shop_name;
    $scope.activeItems = response.data.results[0].Shop.listing_active_count;
    $scope.paymentPolicy = response.data.results[0].Shop.policy_payment;
    $scope.shippingPolicy = response.data.results[0].Shop.policy_shipping;



    // }
    console.log($scope.desc);
    console.log(response);
    console.log($scope.materials);
    console.log("Quantity:" + $scope.quantity);


      // $scope.oneOption = true;
      if  ($scope.quantity === 1) {
        $scope.availOptions = false;
        $scope.oneOption = true;
      }
      else {
        $scope.quantOptions =  [];
        for (var x = 1; x <= $scope.quantity; x++){
          $scope.quantOptions.push(x);
          console.log($scope.quantOptions)
        }
        $scope.availOptions = true;
        $scope.oneOption = false;
      }

    console.log("show that ish");
  });

  $scope.deatsTab = true;
  $scope.reviewTab= false;
  $scope.shipTab= false;

  $scope.reviewTabFunc= function(){
    $scope.deatsTab = false;
    $scope.reviewTab= true;
    $scope.shipTab= false;
  }
  $scope.deatsTabFunc= function(){
    $scope.deatsTab = true;
    $scope.reviewTab= false;
    $scope.shipTab= false;
  }
  $scope.shipTabFunc= function(){
    $scope.deatsTab = false;
    $scope.reviewTab= false;
    $scope.shipTab= true;
  }


  $http({
    method: 'GET',
    url: 'https://openapi.etsy.com/v2/listings/'+ 175112598 +'/images/?api_key=9tojngbsrbfw4ezg2zfrrqvo'
    }).then(function imageCallBack(response) {
      console.log(response);
      $scope.thumbnail = [];
      $scope.loadImage = response.data.results[0].url_570xN;
      for(var y= 0; y < response.data.results.length; y++){
        $scope.thumbnail.push(response.data.results[y].url_75x75)

        console.log($scope.thumbnail);
      }
      var imgCount = 0;
      $scope.imgFuncUp = function(){
        imgCount++;
        if(imgCount <= response.data.results.length - 1){
          $scope.loadImage = response.data.results[imgCount].url_570xN;
          // console.log(imgCount);
          // console.log(response.data.results.length)
        }
        if (imgCount === response.data.results.length) {
          imgCount = 0;
          $scope.loadImage = response.data.results[imgCount].url_570xN;
          // console.log(imgCount);
        }
      }
      $scope.imgFuncDown = function(){
        imgCount--
        // console.log(imgCount)
        if(imgCount < 0){
          imgCount=4;
          // console.log(imgCount);
        }
        if (imgCount >= 0){
          $scope.loadImage = response.data.results[imgCount].url_570xN;
        }

      }

      $scope.thumbImgFunc = function(thumb) {
        $scope.selected = $scope.thumbnail.indexOf(thumb);
        console.log($scope.selected);
        imgCount = $scope.selected;
        $scope.loadImage = response.data.results[imgCount].url_570xN;




      }











    })












});
