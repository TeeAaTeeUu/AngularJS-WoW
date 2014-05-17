angular.module('PetsCtrl', []).controller('PetsController', function($scope, $routeParams, Pets) {

	$scope.pets = {};
	$scope.showPets = {};

	$scope.getLocation($routeParams.region, $routeParams.realm, $routeParams.char);

	$scope.getPets = function() {
		Pets.getPets($scope.region.value, $scope.realm, $scope.name)
		.success( function(data) {
			$scope.pets = data.pets;
		});
	};

	$scope.getPets();

	$scope.showPet = function(petID) {
		$scope.showPets[petID] = true;
	};
});
