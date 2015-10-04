define(['angular', './notificationPlans', './notificationPlansService'], function(angular, notificationPlans, NotificationPlansService) {
    notificationPlans.controller('NotificationPlansController', ['$scope', '$http', 'NotificationPlansService', function($scope, $http, NotificationPlansService) {
	$scope.formData = {};

	$scope.$on('$viewContentLoaded', function() {
	    NotificationPlansService.getNotificationPlans().then(function(plans) {
		$scope.notificationPlans = plans;
	    });
	});

	// when submitting the add form, send the text to the node API
	$scope.createNotificationPlan = function() {
	    NotificationPlansService.createNotificationPlans($scope.formData).then(function(plans) {
		$scope.notificationPlans = plans;
	    });
	};

	// delete a notification plan after checking it
	$scope.deleteNotificationPlan = function(id) {
	    NotificationPlansService.deleteNotificationPlan(id).then(function(plans) {
		$scope.notificationPlans = plans;
	    });
	};
    }]);
});
