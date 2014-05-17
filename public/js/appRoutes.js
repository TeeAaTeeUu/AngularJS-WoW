angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/:region', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/:region/:realm', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/:region/:realm/:char', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/:region/:realm/:char/items', {
		 	templateUrl: 'views/items.html',
		 	controller: 'ItemsController'
		})

		.when('/:region/:realm/:char/pets', {
			templateUrl: 'views/pets.html',
			controller: 'PetsController'
		})

		.when('/:region/:realm/:char/mounts', {
			templateUrl: 'views/mounts.html',
			controller: 'MountsController'
		});

	$locationProvider.html5Mode(true);

}]);
