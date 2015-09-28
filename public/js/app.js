// public/core.js
var helyeah = angular.module('helyeah', []);

helyeah.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/notificationPlans', {
	templateUrl: 'templates/notifications/notificationPlans.html',
	controller: 'NotificationPlansController'
    }).when('/register', {
	templateUrl: 'templates/users/registration.html',
	controller: 'RegistrationController'
    }).otherwise({
	redirectTo: '/notificationPlans'
    });			
}]);
		    

