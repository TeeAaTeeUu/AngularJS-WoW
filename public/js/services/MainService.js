angular.module('MainService', []).factory('Main', function($http) {
	return {
		getRaces : function(host) {
			return $http.jsonp('http://' + host + '.battle.net/api/wow/data/character/races?jsonp=JSON_CALLBACK');
		},
		getClasses : function(host) {
			return $http.jsonp('http://' + host + '.battle.net//api/wow/data/character/classes?jsonp=JSON_CALLBACK');
		}
	}
});
