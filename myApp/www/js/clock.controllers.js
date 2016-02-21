(function(){
	"use strict";
	angular
		.module('timer.controllers', [])
		.controller('clockTimerCtrl', clockTimerCtrl);
	clockTimerCtrl.$inject = [
		'$scope', 
		'$timeout', 
		'dateFilter'
	];
	function clockTimerCtrl($scope,$timeout,dateFilter) {
		var vm = this;
		vm.updateTime = updateTime;
		vm.activateTimer = activateTimer;
		vm.addLap = addLap;
		vm.removeLap = removeLap;
		vm.stopTime = "";
		vm.lapsList = [];

		function updateTime(){
			$timeout(function(){
				vm.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
				updateTime();
			},1000);
		}
		function activateTimer(){
			console.log('aaa');
		}
		function addLap(){
			vm.lapsList[vm.lapsList.length] = {
				stopTime: dateFilter(new Date(), 'hh:mm:ss'),
				title: "Some Title"
			}
			console.log("add lap");
		}
		function removeLap(index){
			console.log("remove")
		}
		updateTime();
	}
})();
