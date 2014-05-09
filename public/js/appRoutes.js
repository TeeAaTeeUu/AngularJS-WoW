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
		});

	$locationProvider.html5Mode(true);

}]);
