helyeah.controller('AuthenticationController', ['$scope', '$http', 'AuthenticationService', '$location', function($scope, $http, AuthenticationService, $location) {
    $scope.formData = {};

    $scope.authenticateUser = function() {
	AuthenticationService.authenticate($scope.formData).then(function() {
	    $location.path('/');    
	});
    };
}]);
