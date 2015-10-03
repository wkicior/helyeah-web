helyeah.factory('AuthToken', function($window) {
    var authTokenFactory = {};

    authTokenFactory.getToken = function() {
	return $window.localStorage.getItem('token');
    }

    authTokenFactory.setToken = function(token) {
            $window.localStorage.setItem('token', token);
    }

    return authTokenFactory;

});

helyeah.factory('TokenInterceptor', function($q, $location, AuthToken) {
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

helyeah.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('TokenInterceptor');
}]);

