angular.module('MountsCtrl', []).controller('MountsController', function($scope, $routeParams, Mounts) {

	$scope.mounts = {};
	$scope.showMounts = {};

	$scope.cant = "'t";

	$scope.getLocation($routeParams.region, $routeParams.realm, $routeParams.char);

	$scope.getMounts = function() {
		Mounts.getMounts($scope.region.value, $scope.realm, $scope.name)
		.success( function(data) {
			$scope.mounts = data.mounts;

			angular.forEach($scope.mounts.collected, function(value, key){
				if(angular.equals(value.isFlying, false)) {
					$scope.mounts.collected[key].isFlyingCant = "'t";
				}
			});
		});
	};

	$scope.getMounts();

	$scope.showMount = function(mountID) {
		$scope.showMounts[mountID] = true;
	};
});
