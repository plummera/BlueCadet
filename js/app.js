var app = angular.module('BlueCadet', []);
app.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: MainController;
    templateUrl: 'index.html'
  }).otherwise({
    reDirectTo: '/'
  });
});
