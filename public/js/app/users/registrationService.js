define(['angular', './users'], function(angular, users) {
    users.factory('RegistrationService', function($http) {
	return {
	    registerUser: function(formData) {
		return $http.post('/resources/users', formData)
		    .then(function(result) {
			return result.data;
		    });
	    }
	}
    });
});
