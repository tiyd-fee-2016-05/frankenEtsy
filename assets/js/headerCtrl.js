mainApp.controller('headerController', ['$scope', function($scope) {

  $(".DropDownWrap").mouseenter(function(){
    $(".DropDownWrap").css("display","block");
  });
  $(".DropDownWrap").mouseleave(function(){
    $(".DropDownWrap").css("display","none");
  });

  $(".vintageNavBar").mouseenter(function(){
    $(".DropDownWrap").css("display","block");
    $(".vintageAccessories").css("display","inline-block");
  });
  $(".vintageNavBar").mouseleave(function(){
    $(".DropDownWrap").css("display","none");
  });

        $('#vinOne').mouseenter(function(){
          $(".vintageArt").css("display","none");
          $(".vintageAccessories").css("display","inline-block");
        });
        $('#vinOne').mouseleave(function(){
          $("vintageAccessories").css("display","none");
        });


        $('#vinTwo').mouseenter(function(){
          $(".vintageArt").css("display","inline-block");
          $(".vintageAccessories").css("display","none");
        });
        $('#vinTwo').mouseleave(function(){
          $(".vintageArt").css("display","none");
        });


        $('#vinThree').mouseenter(function(){
          $(".vintageBags").css("display","inline-block");
          $(".vintageArt").css("display","none");
        });
        $('#vinThree').mouseleave(function(){
          $(".vintageBags").css("display","none");
        });


        $('#vinFour').mouseenter(function(){
          $(".vintageCloth").css("display","inline-block");
          $(".vintageBags").css("display","none");
        });
        $('#vinFour').mouseleave(function(){
          $(".vintageCloth").css("display","none");
        });


        $('#vinFive').mouseenter(function(){
          $(".vintageCraft").css("display","inline-block");
          $(".vintageCloth").css("display","none");
        });
        $('#vinFive').mouseleave(function(){
          $(".vintageCraft").css("display","none");
        });


        $('#vinSix').mouseenter(function(){
          $(".vintageHome").css("display","inline-block");
          $(".vintageCraft").css("display","none");
        });
        $('#vinSix').mouseleave(function(){
          $(".vintageHome").css("display","none");
        });


        $('#vinSeven').mouseenter(function(){
          $(".vintageJewel").css("display","inline-block");
          $(".vintageHome").css("display","none");
        });
        $('#vinSeven').mouseleave(function(){
          $(".vintageJewel").css("display","none");
        });


        $('#vinEight').mouseenter(function(){
          $(".vintageToy").css("display","inline-block");
          $(".vintageJewel").css("display","none");
        });
        $('#vinEight').mouseleave(function(){
          $(".vintageToy").css("display","none");
        });



}]);
