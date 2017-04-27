function ContactController(foo, bar) {
	foo.name = 'Bill Gates';

	bar(function () {
		foo.name = 'Steve Jobs';
	}, 5000);
}


ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);