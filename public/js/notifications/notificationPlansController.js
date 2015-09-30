helyeah.controller('NotificationPlansController', ['$scope', '$http', function($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all notification plans and show them
    $http.get('/resources/notification-plans')
        .success(function(data) {
            $scope.notificationPlans = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createNotificationPlan = function() {
        $http.post('/resources/notification-plans', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.notificationPlans = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a notification plan after checking it
    $scope.deleteNotificationPlan = function(id) {
        $http.delete('/resources/notification-plans/' + id)
            .success(function(data) {
                $scope.notificationPlans = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);
