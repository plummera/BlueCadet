var app = angular.module('bluecadet', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
      controller: "MainController",
      templateUrl: "index.html"
    }).otherwise({
      redirectTo: '/'
    });
});

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
