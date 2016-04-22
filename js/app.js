var app = angular.module('bluecadet', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
      controller: "MainController",
      templateUrl: "index.html"
    }).otherwise({
      redirectTo: '/'
    });
});
