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

	$scope.getLocation = function(region, realm, char) {
		if(!angular.equals($scope.ok, true) && angular.isDefined(region)) {
		if(angular.isDefined(realm)) {
			if(angular.isDefined(char)) {
				$scope.searchUrl(region, realm, char);
			} else {
				$scope.selectRealmUrl(region, realm);
			}
		} else {
			$scope.selectregionUrl(region);
		}
	}
	}

	$scope.selectregion = function(region) {
		$scope.region = region;
		$scope.show.region = false;
		$scope.show.realm = true;
		$location.path($location.path() + region.value);

		$scope.getRealms(region);
		$scope.focus.realm=true;
	};

	$scope.selectregionUrl = function(region) {
		$scope.region.value = region;
		$scope.show.region = false;
		$scope.show.realm = true;

		$scope.getRealms(region);
		$scope.focus.realm=true;
	};

	$scope.selectRealm = function(realm) {
		if(realm && realm.length >= 3) {
			$scope.realm = realm;
			$scope.show.realm = false;
			$scope.show.char = true;
			$scope.error = null;
			$location.path($location.path() + "/" + realm);
		} else {
			$scope.error = "You didn't give me realm. Why?";
		}

		$scope.focus.name=true;
	};

	$scope.selectRealmUrl = function(region, realm) {
		$scope.selectregionUrl(region);
		if(realm && realm.length >= 3) {
			$scope.realm = realm;
			$scope.show.realm = false;
			$scope.show.char = true;
			$scope.error = null;
		} else {
			$scope.error = "You didn't give me realm. Why?";
		}

		$scope.focus.name=true;
	}

	$scope.getRealms = function() {
		$scope.realms = [];

		Global.getRealms($scope.region.value)
		.success( function(data) {
			angular.forEach(data.realms, function(value, key){
				$scope.realms.push(value.name);
			}, $scope.realms);
		})
	};

	$scope.searchUrl = function(region, realm, name) {
		$scope.region.value = region;
		$scope.realm = realm;
		$scope.name = name;

		$scope.searchOrig();
	}

	$scope.search = function(name) {
		$location.path($location.path() + "/" + name);
		$scope.name = name;
		$scope.searchOrig();
	}

	$scope.searchOrig = function() {
		if ($scope.name && $scope.name.length >= 2) {
			Global.getChar($scope.region.value, $scope.realm, $scope.name)
			.success( function(data) {
				if(angular.isDefined(data.name)) {

					$scope.url = "/" + $scope.region.value + "/" + $scope.realm + "/" + $scope.name;

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

					$scope.ok = true;
				} else {
					$scope.error = "The Blizzard Community Platform API did not return any data for your character. This usually happens if you have not logged in to WoW at least once after a major patch."; //http://www.askmrrobot.com
				}
			})
			.error( function(data) {
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
