define(['angular', 'angularRoute', 'angularMessages', 'app/notifications/notificationPlansController', 'app/authentication/authenticationController', 'app/users/registrationController'],
       function (angular, angularRoute, angularMessages, NotificationPlansController, AuthenticationController, RegistrationController) {
	   var helyeah = angular.module('helyeah', ['ngRoute', 'ngMessages', 'helyeah.notificationPlans', 'helyeah.authentication', 'helyeah.users']);

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
		   redirectTo: '/authenticate'
	       });			
	   }]);
       });

		    


