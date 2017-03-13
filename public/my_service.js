var app =  angular.module("MyApp", []);
app.controller('ServiceCtrl', ['$scope', '$log', 'calcService',  function($scope, $log, calcService) {

	$scope.num1 = 40;
	$scope.num2 = 35;

	// Get sum of the numbers by default function
	// $scope.getSum = function(){
	// 	$scope.sum =  parseInt($scope.num1) + parseInt($scope.num2);
	// }


	// Get sum of the numbers by service for synchronus
	$scope.getSum = function(){
		$scope.sum =  calcService.getSum($scope.num1, $scope.num2);
	}

	// Get sum of numbers by service with callbacks for asynchronus
	// $scope.getSum = function(){
	// 	calcService.getSum($scope.num1, $scope.num2, function(err, result){
	// 		// If error occure
	// 		if(err){
	// 			$log.log('Getting error durring calculations')
	// 		}else{// on success
	// 			$scope.sum =  result;
	// 		}
	// 	});
	// }

}]);


/*----------------------------------Factory----------------------------------*/
/*app.factory('calcService', ['$http', '$log', function($http, $log){
	$log.log("Instatiating......");

	// Initalize a object empty.
	var objectCalcService = {};
	// Without callback
	// objectCalcService.getSum = function(a, b){
	// 	return parseInt(a) + parseInt(b);
	// }


	// With callback and without http request
	// objectCalcService.getSum = function(a, b, callback){
	// 	var r = parseInt(a) + parseInt(b);
	// 	callback(false, r);
	// }

	return objectCalcService;
}]);*/



/*----------------------------------Service----------------------------------*/
// app.service('calcService', ['$http', '$log', function($http, $log){
// 	$log.log("Instatiating......");


// 	// Without callback
// 	this.getSum = function(a, b){
// 		return parseInt(a) + parseInt(b);
// 	}

// 	// With callback and without http request
// 	/*this.getSum = function(a, b, callback){
// 		var r = parseInt(a) + parseInt(b);
// 		callback(false, r);
// 	}*/

// }]);





/*----------------------------------Provider----------------------------------*/
app.provider('calcService',function(){

	var allowAddition = false;
	this.config = function(data){
		allowAddition = data;
	}


	this.$get = ['$http', '$log', function($http, $log){
		$log.log("Instatiating......");
		// Initalize a object empty.
		var objectCalcService = {};
		// Without callback
		objectCalcService.getSum = function(a, b){
			console.log(allowAddition)
			if(allowAddition){
				return parseInt(a) + parseInt(b);
			}else{
				return 'Addition not allowed';
			}
		}
		// With callback and without http request
		// objectCalcService.getSum = function(a, b, callback){
		// 	var r = parseInt(a) + parseInt(b);
		// 	callback(false, r);
		// }

		return objectCalcService;
	}];
});

app.config(['calcServiceProvider', function(calcServiceProvider){
	calcServiceProvider.config(true);
}]);