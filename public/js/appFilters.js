angular.module('MyFilters', [])
.filter('capitalize', function() { // http://scofred.com/2013/12/20/angularjs-filter-to-auto-capitalize-the-first-letter/
	return function(input, scope) {
		if (input!=null)
			input = input.toLowerCase();
		else
			return input;
		return input.substring(0,1).toUpperCase()+input.substring(1);
	}
});
