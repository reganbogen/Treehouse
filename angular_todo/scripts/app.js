angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
	$scope.learningNgChange = function() {
		console.log("An input changed.");
	};

	$scope.helloWorld = dataService.helloWorld;

	dataService.getTodos(function(response) {
		console.log(response.data);
		$scope.tods = response.data;
	});

	$scope.deleteTodo = function(todo, $index) {
		dataService.deleteTodo(todo);$scope.todos.splice($index, 1);
	};

	$scop.saveTodo = function(todo) {
		dataService.saveTodo(todo);
	}
})

.service('dataService', function($http) {
	this.helloWorld = function() {
		console.log("this is the data service's method!");
	};

	this.getTodos = function(callback) {
		$http.get('mock/todos.json')
		.then(callback)
	};

	this.deleteTodo = function(todo) {
		console.log("The" + todo.name + "has been deleted!")
		//other logic
	};
	this.saveTodos = function(todo) {
		console.log("Ths " + todo.name + " dodo has been saved!");
	};

});