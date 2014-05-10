angular.module('MountsService', []).factory('Mounts', function($http) {
	return {
		getMounts : function(host, realm, name) {
			return $http.jsonp('http://' + host + '.battle.net/api/wow/character/' + realm + '/' + name + '?fields=mounts' + '&jsonp=JSON_CALLBACK');
		}
	}

});
