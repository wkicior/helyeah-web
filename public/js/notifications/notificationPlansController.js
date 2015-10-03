helyeah.controller('NotificationPlansController', ['$scope', '$http', 'NotificationPlansService', function($scope, $http, NotificationPlansService) {
    $scope.formData = {};

    // when landing on the page, get all notification plans and show them
    NotificationPlansService.getNotificationPlans().then(function(plans) {
	$scope.notificationPlans = plans;
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
