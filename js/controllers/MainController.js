app.controller('MainController', ['$scope', 'buses', function($scope, buses) {
  buses.success(function(data) {
    $scope.buses = data;
  })
}]);
