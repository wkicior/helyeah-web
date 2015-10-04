define(['angular', './users'], function(angular, users) {
    users.controller('RegistrationController', ['$scope', '$http', function($scope, $http) {
	$scope.formData = {};

	$scope.registerUser = function() {
	    $http.post('/resources/users', $scope.formData)
		.success(function(data) {
		    console.log(data);
		}).error(function(data){
		    console.log('Error: ' + data);
		});
	};
    }]);
});
