helyeah.controller('AuthenticationController', ['$scope', '$http', 'AuthToken', function($scope, $http, AuthToken) {
    $scope.formData = {};

    $scope.authenticateUser = function() {
	$http.post('/resources/authentication', $scope.formData)
	    .success(function(data) {
		AuthToken.setToken(data.token);
	    }).error(function(data){
		console.log('Error: ' + data);
	    });
    };
}]);
