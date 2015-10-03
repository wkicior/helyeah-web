// public/core.js
var helyeah = angular.module('helyeah', ['ngRoute']);

helyeah.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/notificationPlans', {
	templateUrl: 'templates/notifications/notificationPlans.html',
	controller: 'NotificationPlansController'
    }).when('/register', {
	templateUrl: 'templates/users/registration.html',
	controller: 'RegistrationController'
    }).when('/authenticate', {
	templateUrl: 'templates/authentication/authentication.html',
	controller: 'AuthenticationController'
    }).otherwise({
	redirectTo: '/notificationPlans'
    });			
}]);


		    


