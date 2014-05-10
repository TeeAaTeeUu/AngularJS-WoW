angular.module('PetsCtrl', []).controller('PetsController', function($scope, Pets) {

	$scope.pets = {};
	$scope.showPets = {};

	$scope.getPets = function() {
		Pets.getPets("eu", "Mazrigos", $scope.char.name)
		.success( function(data) {
			$scope.pets = data.pets;
		});
	};

	$scope.getPets();

	$scope.showPet = function(petID) {
		$scope.showPets[petID] = true;
	};
});
