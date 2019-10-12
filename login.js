var app =angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"login.html",
        controller:"Ctrl"
    })
    .when("/signUp",{
        templateUrl:"signUp.html",
        controller:"Ctrl"  
   })
    .when('/dashboard',{
        templateUrl:'dashboard.html',
        controller:'Ctrl'  
    });
});
app.controller("Ctrl",function($scope){
    $scope.submit=function(){
        
        if($scope.username=="aaa" && $scope.password=="aaa"){
            alert("Login Successful");
            window.location.href="tab.html";
        }else{
            alert("login failed(First Sign up)")
        }
    };
    $scope.register=function(){
        console.log("-------------")
        if($scope.fullname=="abc" && $scope.email=="@"){
            alert("Register is Successfull");
            window.location.href="login.html";
        }
        
    }
});