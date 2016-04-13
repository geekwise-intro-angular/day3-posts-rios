var app = angular.module('my_app', []);

app.controller('my_app_ctrl',

	function($scope) {

	$scope.welcome = "Header 1";
	$scope.items = {

		"prop1": "val1",
		"prop2": "val2",
		"prop3": "val3"

	};
});