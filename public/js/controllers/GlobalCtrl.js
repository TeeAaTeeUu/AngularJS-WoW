angular.module('GlobalCtrl', []).controller('GlobalController', function($scope, Global) {

	$scope.search = function(name) {
		$scope.region = "eu";
		$scope.realm = "Mazrigos";
		if (name) {
			Global.getChar($scope.region, $scope.realm, name)
				.success( function(data) {
					$scope.staticUrl = "http://" + $scope.region + ".battle.net/static-render/" + $scope.region + "/";
					$scope.mediaUrl = "http://" + $scope.region + ".media.blizzard.com/wow/icons/56/";

        			$scope.char = data;
        			$scope.char.thumbnail = $scope.staticUrl + $scope.char.thumbnail;
        			$scope.error = null;

        			if(angular.equals($scope.char.gender, 0)) {
        				$scope.char.sex = "male";
        				$scope.char.sexHas = "his";
        			} else {
        				$scope.char.sex = "female";
        				$scope.char.sexHas = "her";
        			}
    			});
		} else {
			$scope.error = "You didn't give me anything. Why?";
		};
	};

	$scope.clearSearch = function() {
		$scope.char = null;
		$scope.name = null;
		$scope.error = null;
	}
});
