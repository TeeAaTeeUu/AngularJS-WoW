angular.module('GlobalService', []).factory('Global', function($http) {
	return {
		getChar : function(host, realm, name) {
			return $http.jsonp('http://' + host + '.battle.net/api/wow/character/' + realm + '/' + name + '?jsonp=JSON_CALLBACK');
		},
		getRealms : function(host) {
			return $http.jsonp('http://' + host + '.battle.net/api/wow/realm/status?jsonp=JSON_CALLBACK');
		}
	}
});
