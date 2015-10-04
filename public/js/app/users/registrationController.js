define(['angular', './users', './registrationService'], function(angular, users, RegistrationService) {
    users.controller('RegistrationController', ['$scope', '$http', 'RegistrationService', '$location', function($scope, $http, RegistrationService, $location) {
	$scope.formData = {};

	$scope.registerUser = function() {
	    RegistrationService.registerUser($scope.formData).then(function() {
		$location.path('/');
	    });
	};
    }]);
});
