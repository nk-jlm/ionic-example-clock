(function(){
	"use strict";
	angular
		.module('timer.controllers', [])
		.controller('stopWatchCtrl', stopWatchCtrl);

	stopWatchCtrl.$inject = [
		'$interval',
		'stopWatchFilter'
	];
	function stopWatchCtrl($interval, stopWatchFilter) {
		var vm = this;
		vm.startTimer = startTimer;
		vm.addLap = addLap;
		vm.removeLap = removeLap;
		vm.timeSwitcher = timeSwitcher;
		vm.stopTimer = stopTimer;
		vm.timeUpdate = timeUpdate;
		vm.resetTimer = resetTimer;

		vm.stopTime = "";
		vm.wasStartTimer = false;
		
		if (localStorage.getItem('timeStatus')){
			vm.timeStatus = JSON.parse(localStorage.getItem('timeStatus'))
		}else{
			vm.timeStatus = 0;
			vm.startTime = 0;
		}

		if (localStorage.getItem('lapsList')){
			vm.lapsList = JSON.parse(localStorage.getItem('lapsList'))
		}else{
			vm.lapsList = []
		}

		function timeSwitcher(){
			console.log(vm.wasStartTimer);
			vm.wasStartTimer ? vm.stopTimer() : vm.startTimer();
		}
  		function startTimer() {
  			vm.wasStartTimer = true;
    		vm.startTime = vm.timeStatus;
			if(vm.timeRun){
				$interval.cancel(vm.timeRun);
			}
			vm.timeRun = $interval(vm.timeUpdate, 30);
		}

		function timeUpdate(){
			vm.timeStatus++;
			localStorage.setItem('timeStatus', JSON.stringify(vm.timeStatus))
		}

		function stopTimer(){
			vm.wasStartTimer = false;
			if(vm.timeRun){
				$interval.cancel(vm.timeRun);
				vm.startTime = vm.timeStatus;
			}
  		}
  
		function resetTimer(){
			vm.timeStatus = 0;
			vm.lapsList = [];
			$interval.cancel(vm.timeRun);
		}

		function addLap(){
			vm.lapsList[vm.lapsList.length] = {
				stopTime: stopWatchFilter(vm.timeStatus),
				title: "Some Title"
			}
			localStorage.setItem('lapsList', JSON.stringify(vm.lapsList))
			console.log("add lap");
		}

		function removeLap(index){
			vm.lapsList.splice(index, 1);
			localStorage.setItem('lapsList', JSON.stringify(vm.lapsList))
			console.log("remove")
		}
	}
})();
