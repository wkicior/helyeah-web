requirejs.config({
    baseUrl: 'js/lib',
    paths: {
	angular: 'angular',
	angularRoute: 'angular-route',
	angularMessages: 'angular-messages',
	app: '../app'
    },
    shim: {
	'angular' : {'exports' : 'angular'},
	'angularRoute': ['angular'],
	'angularMessages': ['angular']
    },
    priority: ['angular']
});

require(['angular','app/app'], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
	// bootstrap the app manually
	angular.bootstrap(document, ['helyeah']);
    });
});

