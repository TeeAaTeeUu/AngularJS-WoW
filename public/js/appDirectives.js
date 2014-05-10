angular.module('MyDirectives', [])
.directive('focusMe', function() { //http://stackoverflow.com/questions/14833326/how-to-set-focus-in-angularjs/14837021#14837021
	return {
		scope: { trigger: '=focusMe' },
		link: function(scope, element) {
			scope.$watch('trigger', function(value) {
				if(value === true) {
					element[0].focus();
					scope.trigger = false;
				}
			});
		}
	};
});
