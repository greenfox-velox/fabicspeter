
var app=angular.module('myApp',[]);
app.controller('cntrl', function($scope,$http){
	$scope.btnName="Insert";
	$scope.editNum = 0;
	$scope.id = "";
	$scope.name = "";

	$scope.insertdata=function(){
		console.log($scope.id, $scope.name);
		if($scope.id != "" || $scope.name != ""){
			console.log($scope.id, $scope.name);
			$http.post("insert.php",{'id':$scope.id, 'name':$scope.name, 'btnName': $scope.btnName, 'editNum': $scope.editNum})
			.success(function(){
				$scope.msg="Data Inserted";
				$scope.btnName="Insert";
				$scope.id = "";
				$scope.name = "";
				$scope.displayCoffe();
			})
		}else {
			$scope.msg="please fill al input";
		}
	}

	$scope.displayCoffe=function(){
		$http.get("select.php")
		.success(function(data){
			$scope.data=data.slice().reverse();
			console.log(data);
		});
	};
	$scope.deleteCoffe=function(studid){
		$http.post("delete.php",{'id':studid})
		.success(function(){
				$scope.msg="Data Deletion successfull";
				$scope.displayCoffe();
		})
	}

	$scope.editCoffe=function(studid, studname, id){
			$scope.id=studid;
			$scope.name=studname;
			$scope.editNum = parseInt(id);
			console.log($scope.editNum);
			$scope.btnName="Update";
	}
});
