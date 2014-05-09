angular.module('ItemsCtrl', []).controller('ItemsController', function($scope, Items) {

	$scope.items = {};
	$scope.show = {};

	$scope.getItems = function() {
		Items.getItems("eu", "Mazrigos", $scope.char.name)
		.success( function(data) {
			angular.forEach(data.items, function(value, key){
				if(!(angular.equals(key, "averageItemLevel") || angular.equals(key, "averageItemLevelEquipped"))) {
					$scope.items[key] = value;
				}
			});
			$scope.char.averageItemLevelEquipped = data.items.averageItemLevelEquipped;
			$scope.char.averageItemLevel = data.items.averageItemLevel;
		});
	}

	$scope.getItems();

	$scope.showItem = function(itemID) {
		$scope.show[itemID] = true;
		console.log(itemID + "testi");
	}
});
