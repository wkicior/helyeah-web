define(['angular', './notificationPlans'], function(angular, notificationPlans) {
    notificationPlans.factory('NotificationPlansService', function($http) {
	return {
	    getNotificationPlans: function() {
		return $http.get('/resources/notification-plans')
		    .then(function(result) {
			return result.data;
		    });
	    },
	    createNotificationPlan: function() {
		var data = {'email' : 'test123@wp.pl'};
		return $http.post('/resources/notification-plans', data)
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
});
