app.factory('buses', ['$http', function($http) {
  return $http.get('http://www3.septa.org/hackathon/TransitViewAll/')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
