helyeah.factory('NotificationPlansService', function($http) {
    return {
	getNotificationPlans: function() {
	    return $http.get('/resources/notification-plans')
		.then(function(result) {
		    return result.data;
		});
	},
	createNotificationPlans: function(formData) {
	    return $http.post('/resources/notification-plans', formData)
		.then(function(result) {
		    return result.data;
		});	    
	},
	deleteNotificationPlan: function(id) {
	    return $http.delete('/resources/notification-plans/' + id)
		.then(function(result) {
		    return result.data;
		});
	}
    }
});
