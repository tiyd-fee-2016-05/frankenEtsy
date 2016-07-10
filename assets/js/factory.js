mainApp.service("dataFactory",["$http", function($http){

// FOURTH ROW //
var HomeUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=homeandliving&includes=Images,Shop&limit=12&offset=0"
var JewerlyUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=jewelry&includes=Images,Shop&limit=12&offset=0"
var clothingUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=clothing&includes=Images,Shop&limit=12&offset=0"
var weddingsUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=weddings&includes=Images,Shop&limit=12&offset=0"
var craftSuppliesAndToolsUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=craftsuppliesandtools&includes=Images,Shop&limit=12&offset=0"
var toysAndGamesUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=toysandgames&includes=Images,Shop&limit=12&offset=0"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    I NEVER GOT A CONNECTION TO getHome api call.  Keep getting an error message that said getHome was not defined.  I googled the error msg.  I read without understanding what
// I was reading.  I asked a classmate and he did not understand either; and suggested I stick with creating an api call and get request for every url I needed, so that's the
// route we took.  I looks like factory will be an excellent short cut on creating "get" request, but I need more info.                            ////


// NINTH ROW//
var giftsforcyclistUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=giftsforcyclist&includes=Images,Shop&limit=12&offset=0"
var bestofsummerUrl = "https://openapi.etsy.com/v2/listings/active?api_key=nsh3xdn1xlab8cak8wsrh8f6&keywords=bestofsummer&includes=Images,Shop&limit=12&offset=0"

//   THIS IS NOT ALL OF THE NINTH ROW IN THE INDEX PAGE.  I BEGAN CREATING VARIABLES TO "GET" API URLS AND REALIZED BEFORE I GOT TOO FAR DOWN THE ROAD I NEED TO
//    MAKE SURE THE FOURTH ROW WOULD WORK.   ///

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
