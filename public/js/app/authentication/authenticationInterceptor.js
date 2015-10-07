define(['./authentication'], function(authentication) {
authentication.factory('AuthToken', function($window) {
    var authTokenFactory = {};

    authTokenFactory.getToken = function() {
	return $window.localStorage.getItem('token');
    }

    authTokenFactory.setToken = function(token) {
            $window.localStorage.setItem('token', token);
    }

    return authTokenFactory;

});

authentication.factory('TokenInterceptor', function($q, $location, AuthToken) {
    return {
	'request': function(config) {
	    var token = AuthToken.getToken();
	    if (token) {
		config.headers['x-access-token'] = token;
	    }
	    return config;
	}
    };
});
    
    authentication.config(['$httpProvider', function($httpProvider) {  
	$httpProvider.interceptors.push('TokenInterceptor');
    }]);
    
});
