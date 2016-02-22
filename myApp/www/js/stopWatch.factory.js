(function(){
	"use strict";
	angular
		.module('timer.controllers')
		.factory('stopWatch', stopWatchFactory);
	stopWatchFactory.$inject = ['$interval'];
	function stopWatchFactory($http){
		return {
		}
	}	
})();