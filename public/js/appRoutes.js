angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/items', {
		 	templateUrl: 'views/items.html',
		 	controller: 'ItemsController'
		});

	$locationProvider.html5Mode(true);

}]);
