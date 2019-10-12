var app = angular.module("myApp", []);
app.controller("RegisterCtrl", function ($scope) {
  console.log("...............")
  $scope.y = [];
  $scope.addReg = function () {
    $scope.y.push({
      first: $scope.first,
      last: $scope.last,
      email: $scope.email,
      password: $scope.password
    })
    if($scope.first==first || $scope.last==last||$scope.email==email||$scope.password==password){
      alert("Registration Successful");
      window.location.href="tab.html";
    }else{
      alert("Registration not complete")
    }
   
  }


  });