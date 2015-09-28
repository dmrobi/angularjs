var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('customService', function () {
    
    this.name = "Dm Robi";
    this.namelength = function(){
        return this.name.length;
    };

});

myApp.controller('mainController', ['$scope', '$log', 'customService', function($scope, $log, customService) {
    
    $scope.name = 'Main';

    customService.name = "Robiul Islam Robi";
    $log.log(customService.name);
    $log.log(customService.namelength());
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);
