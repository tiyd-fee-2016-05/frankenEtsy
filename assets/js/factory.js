// thank you, http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service, for your help!!!

  mainApp.factory( "dataFactory", [ "$http", function( $http ) {


  var listingsUrl = "https://openapi.etsy.com/v2/listings/active?includes=MainImage,Shop&limit=60&offset=0&api_key=8ehgwfe57rb8jl60hnt04nom";
  // var jewelryUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=jewelry&includes=Images,Shop&limit=1&offset=0";
  // var homeUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=home&includes=Images,Shop&limit=1&offset=0";
  // var artUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=art&includes=Images,Shop&limit=1&offset=0";
  // var clothingUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=clothing&includes=Images,Shop&limit=1&offset=0";
  // var accessoriesUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=accessories&includes=Images,Shop&limit=1&offset=0";
  // var paperUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=paper&includes=Images,Shop&limit=1&offset=0";
  // var weddingsUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=weddings&includes=Images,Shop&limit=1&offset=0";
  // var bagsUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=bags&includes=Images,Shop&limit=1&offset=0";
  // var bathUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=bath&includes=Images,Shop&limit=1&offset=0";
  // var toysUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=toys&includes=Images,Shop&limit=1&offset=0";
  // var booksUrl = "https://api.etsy.com/v2/listings/act?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=movies&includes=Images,Shop&limit=1&offset=0";
  // var electronicsUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=electronics&includes=Images,Shop&limit=1&offset=0";
  // var petUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=pets&includes=Images,Shop&limit=1&offset=0";
  // var shoesUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=shoes&includes=Images,Shop&limit=1&offset=0";
  // var craftsUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=crafts&includes=Images,Shop&limit=1&offset=0";
  //
  var necklacesUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=necklaces&includes=Images,Shop&limit=1&offset=0";
  var decorUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=decor&includes=Images,Shop&limit=1&offset=0";
  var beadingUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=beading&includes=Images,Shop&limit=1&offset=0";
  var WomensclothingUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=womens_clothing&includes=Images,Shop&limit=1&offset=0";
  var PartysuppliesUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=party_supplies&includes=Images,Shop&limit=1&offset=0";
  var earringsUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=earrings&includes=Images,Shop&limit=1&offset=0";
  var printsUrl = "https://api.etsy.com/v2/listings/active?api_key=8ehgwfe57rb8jl60hnt04nom&keywords=prints&includes=Images,Shop&limit=1&offset=0";

  var dataFactory = {};
  // var dataReceived = false;

  dataFactory.getListings = function() {
    return $http.get( listingsUrl );
  };

  // dataFactory.getJewelry = function() {
  //   return $http.get( jewelryUrl );
  // };
  //
  // dataFactory.getHome = function() {
  //   return $http.get( homeUrl );
  // };

  // //SUB-CATEGORIES!//
  //
  dataFactory.getNecklaces = function() {
    return $http.get( necklacesUrl );
  };

  dataFactory.getDecor = function() {
    return $http.get( decorUrl );
  };

  dataFactory.getBeading = function() {
    return $http.get( beadingUrl );
  };

  dataFactory.getWomensclothing = function() {
    return $http.get( WomensclothingUrl );
  };

  dataFactory.getPartysupplies = function() {
    return $http.get( PartysuppliesUrl );
  };

  dataFactory.getEarrings = function() {
    return $http.get( earringsUrl );
  };

  dataFactory.getPrints = function() {
    return $http.get( printsUrl );
  };
  //
  //
  // //
  // // dataFactory.getToys = function() {
  // //   return $http.get( toysUrl );
  // // };
  // //
  // // dataFactory.getBooks = function() {
  // //   return $http.get( booksUrl );
  // // };
  return dataFactory;
}]); // end mainApp.factory
