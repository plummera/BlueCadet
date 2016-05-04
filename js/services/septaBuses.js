app.factory('buses', ['$http', function($http, buses) {
  return $http.get('//www3.septa.org/hackathon/TransitViewAll/')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
