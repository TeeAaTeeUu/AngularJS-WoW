angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// .when('/local', {
		// 	templateUrl: 'views/geek.html',
		// 	controller: 'LocalController'
		// });

	$locationProvider.html5Mode(true);

}]);
