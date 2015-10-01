//Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(function ($routeProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCntroller'
	})
	
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})

});

//Services
weatherApp.service('cityService', function () {
	
	this.city = 'New York, NY';

});

//Controllers
weatherApp.controller('homeCntroller', ['$scope', 'cityService', function ($scope, cityService) {
	
	$scope.city = cityService.ctiy;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function ($scope, cityService) {

	$scope.city = cityService.ctiy;
	
}]);