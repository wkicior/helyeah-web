define(['angular', './authentication', './authenticationInterceptor'], function(angular, authentication, authenticationInterceptor) {
    authentication.factory('AuthenticationService', ['$http', 'AuthToken', function($http, AuthToken) {
	return{
	    authenticate: function(formData) {
		return $http.post('/resources/authentication', formData)
		    .then(function(result) {
			console.log(result.data);
			AuthToken.setToken(result.data.token);
		    });
	    }
	}
    }]);
});
