define(['angular', './notificationPlans', './notificationPlansService', 'bootstrapSwitch'], function(angular, notificationPlans, NotificationPlansService, BootstrapSwitch) {
    notificationPlans.controller('NotificationPlansController', ['$scope', '$http', '$timeout', 'NotificationPlansService', function($scope, $http, $timeout, NotificationPlansService) {
	$scope.formData = {};
	$scope.planId = 0;

	$scope.postNotificationPlan = function(state) {
	    $scope.formData.enabled = state;
	    if (state) {
		$scope.createNotificationPlan()
	    } else {
		$scope.deleteNotificationPlan();
	    } 
	};

	$scope.$on('$viewContentLoaded', function() {
	    NotificationPlansService.getNotificationPlans().then(function(plans) {
		$scope.formData.enabled = plans.length > 0;
		if ($scope.formData.enabled) {
		    $scope.planId = plans[0]._id;
		    console.log($scope.planId);
		}

	    });

	    //bootstrapSwitch must be triggered when the page is rendered
	    $timeout(function() {
		$("[name='notification-checkbox']").bootstrapSwitch();
	    }, 300);

	    $("[name='notification-checkbox']").on('switchChange.bootstrapSwitch', function(event, state) {
		$scope.postNotificationPlan(state);
	    });
	
	});

	// when submitting the add form, send the text to the node API
	$scope.createNotificationPlan = function() {
	    NotificationPlansService.createNotificationPlan($scope.formData).then(function(plans) {
		$scope.formData.enabled = true;
		$scope.planId = plans[0]._id;
	    });
	};

	// delete a notification plan after checking it
	$scope.deleteNotificationPlan = function(id) {
	    NotificationPlansService.deleteNotificationPlan($scope.planId).then(function(plan) {
		$scope.formData.enabled = false;
		$scope.planId = 0;
	    });
	};

	$scope.isNotificationEnabled = function() {
	    return $scope.formData.enabled;
	};
    }]);
});
