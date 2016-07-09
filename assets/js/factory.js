mainApp.service("dataFactory",["$http", function($http){

// FOURTH ROW //
var HomeUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=homeandliving&includes=Images,Shop&limit=12&offset=0"
var JewerlyUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=jewelry&includes=Images,Shop&limit=12&offset=0"
var clothingUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=clothing&includes=Images,Shop&limit=12&offset=0"
var weddingsUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=weddings&includes=Images,Shop&limit=12&offset=0"
var craftSuppliesAndToolsUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=craftsuppliesandtools&includes=Images,Shop&limit=12&offset=0"
var toysAndGamesUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=toysandgames&includes=Images,Shop&limit=12&offset=0"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NINTH ROW//
var giftsforcyclistUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=giftsforcyclist&includes=Images,Shop&limit=12&offset=0"
var bestofsummerUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=bestofsummer&includes=Images,Shop&limit=12&offset=0"



var dataFactory;


dataFactory.getHome = function(){
 return $http.get(HomeUrl);
 console.log(HomeUrl);

};

dataFactory.getJewerly = function(){
  return $http.get(JewelryUrl);


};





return dataFactory;


}]);
