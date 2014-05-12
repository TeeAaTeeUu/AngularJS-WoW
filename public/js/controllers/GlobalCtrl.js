angular.module('GlobalCtrl', []).controller('GlobalController', function($scope, $location, Global) {

	$scope.regions = [
	{name:'US', value:'us'},
	{name:'Europe', value:'eu'},
	{name:'Korea', value:'kr'},
	{name:'Taiwan', value:'tw'}
	];

	$scope.focus = {};

	$scope.show = {};
	$scope.show.region = true;

	$scope.region = $scope.regions[1];

	$scope.selectregion = function(region) {
		$scope.region = region;
		$scope.show.region = false;
		$scope.show.realm = true;
	};

	$scope.selectRealm = function(realm) {
		if(realm && realm.length >= 3) {
			$scope.realm = realm;
			$scope.show.realm = false;
			$scope.show.char = true;
			$scope.error = null;
		} else {
			$scope.error = "You didn't give me realm. Why?";
		}
	};

	$scope.getRealms = function() {
		$scope.realms = [];

		Global.getRealms($scope.region.value)
		.success( function(data) {
			angular.forEach(data.realms, function(value, key){
				$scope.realms.push(value.name);
			}, $scope.realms);
		})
	};

	$scope.search = function(name) {
		$scope.name = name;
		if (name && name.length >= 2) {
			Global.getChar($scope.region.value, $scope.realm, $scope.name)
			.success( function(data) {
				if(angular.isDefined(data.name)) {

					$scope.staticUrl = "http://" + $scope.region.value + ".battle.net/static-render/" + $scope.region.value + "/";
					$scope.mediaUrl = "http://" + $scope.region.value + ".media.blizzard.com/wow/icons/56/";

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
				} else {
					$scope.error = "The Blizzard Community Platform API did not return any data for your character. This usually happens if you have not logged in to WoW at least once after a major patch."; //http://www.askmrrobot.com
				}
			})
			.error( function() {
				$scope.error = "We didn't find anything with given realm and character name, sorry!";
			});
		} else {
			$scope.error = "You didn't give me name. Why?";
		};
	};

	$scope.clearSearch = function() {
		$scope.char = null;
		$scope.name = null;
		$scope.error = null;
		$scope.show.region = true;
		$scope.show.realm = false;
		$scope.show.char = false;

		$location.path("/");
	}
});
