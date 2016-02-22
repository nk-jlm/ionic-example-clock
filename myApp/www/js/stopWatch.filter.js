(function(){
	"use strict";
	angular
		.module('timer.controllers')
		.filter('stopWatch', stopWatchFilter);

	stopWatchFilter.$inject = ['$interval'];

	function stopWatchFilter(time){
		return function(time){

			var ms = time;
			var seconds = Math.floor(ms / 100) % 60;
			var minutes = Math.floor(ms / 6000);

			if (ms < 10) {ms = "0" + ms;}
			if (minutes < 10) {minutes = "0" + minutes;}
			if (seconds < 10) {seconds = "0" + seconds;}

			return minutes +':'+ seconds +':'+ (ms%100);

		}
	}	
})();