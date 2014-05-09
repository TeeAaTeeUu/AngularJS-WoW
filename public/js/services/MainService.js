angular.module('MainService', []).factory('Main', function($http) {
	return {
		getRaces : function() {
			return $http.jsonp('http://eu.battle.net/api/wow/data/character/races?jsonp=JSON_CALLBACK');
		},
		getClasses : function() {
			return $http.jsonp('http://eu.battle.net//api/wow/data/character/classes?jsonp=JSON_CALLBACK');
		}
	}
});
