app.controller('BusController', ['$scope', 'buses', '$routeParams', function($scope, buses, $routeParams) {
  buses.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
