angular.module('ItemsCtrl', []).controller('ItemsController', function($scope, $routeParams, Items) {

	$scope.items = {};
	$scope.showItems = {};

	$scope.getLocation($routeParams.region, $routeParams.realm, $routeParams.char);

	$scope.getItems = function() {
		Items.getItems($scope.region.value, $scope.realm, $scope.name)
		.success( function(data) {
			angular.forEach(data.items, function(value, key){
				if(!(angular.equals(key, "averageItemLevel") || angular.equals(key, "averageItemLevelEquipped"))) {
					$scope.items[key] = value;
				}
			});
			$scope.char.averageItemLevelEquipped = data.items.averageItemLevelEquipped;
			$scope.char.averageItemLevel = data.items.averageItemLevel;
		});
	};

	$scope.getItems();

	$scope.showItem = function(itemID) {
		$scope.showItems[itemID] = true;
	};
});
