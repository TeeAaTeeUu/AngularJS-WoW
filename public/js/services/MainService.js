angular.module('MainService', []).factory('Main', function($http) {
	return {
		getChar : function(host, realm, name) {
			return $http.jsonp('http://eu.battle.net/api/wow/character/mazrigos/' + name + '?jsonp=JSON_CALLBACK');
		},
		getRaces : function() {
			return $http.jsonp('http://eu.battle.net/api/wow/data/character/races?jsonp=JSON_CALLBACK');
		}
	}
});
