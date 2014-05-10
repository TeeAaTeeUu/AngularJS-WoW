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
		})

		.when('/pets', {
			templateUrl: 'views/pets.html',
			controller: 'PetsController'
		})

		.when('/mounts', {
			templateUrl: 'views/mounts.html',
			controller: 'MountsController'
		});

	$locationProvider.html5Mode(true);

}]);
