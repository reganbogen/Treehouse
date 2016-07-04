angular.module("todoListApp", []);
.controller('mainCtrl', function(scope) {
	$scope.helloWorld = function() {
		console.log("hello there: This is the helloworld controller function, in the mainCtrl: ");
	};
});