define(['angular', './authentication', './authenticationInterceptor'], function(angular, authentication, authenticationInterceptor) {
    authentication.factory('AuthenticationService', ['$http', 'AuthToken', function($http, AuthToken) {
	return{
	    authenticate: function(formData) {
		return $http.post('/resources/authentication', formData)
		    .then(function(result) {
			if (result.data.success) {
			    AuthToken.setToken(result.data.token);
			}
			return result.data;
		    });
	    },

	    logout: function() {
		AuthToken.setToken(null);
	    },

	    wasAuthenticated: function() {
		var result =  AuthToken.getToken() != "null" && AuthToken.getToken();
		return result;
	    }
	}
    }]);
});
