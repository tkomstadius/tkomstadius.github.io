(function () {
  'use strict';

  var app = angular.module('tkApp', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', { 
        templateUrl: 'app/templates/main.html'
      }).
      when('/about', {
        templateUrl: 'app/templates/about.html'
      }).
      when('/cv', { 
        templateUrl: 'app/templates/cv.html'
      }).
      otherwise({
        redirectTo: '/'
      });  
  }]);

  app.controller('tkHead', ['$scope', function($scope){
  
  }]);

  app.directive('tkAbout', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/templates/about.html'
    };
  });

})();
