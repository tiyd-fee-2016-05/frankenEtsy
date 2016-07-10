mainApp.controller('headerController', ['$scope', function($scope) {

  $(".DropDownWrap").mouseenter(function(){
    $(".DropDownWrap").css("display","block");
  });
  $(".DropDownWrap").mouseleave(function(){
    $(".DropDownWrap").css("display","none");
  });

  $(".navbarItems").mouseenter(function(){
    $(".DropDownWrap").css("display","block");
  });
  $(".navbarItems").mouseleave(function(){
    $(".DropDownWrap").css("display","none");
  });


}]);
