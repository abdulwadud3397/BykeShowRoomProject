var app = angular.module('MyApp',[]);
app.controller("prodCtrl",function($scope){
  $scope.title = "Product Info";
  $scope.contacts=[];
  $scope.addItem = function(){
    $scope.contacts.push({
      name: $scope.name,
      price: $scope.price,
      quantity: $scope.quantity,
      type:$scope.type
       
    })
  };
  $scope.edit=function(index){
    $scope.name=$scope.contacts[index].name,
    $scope.price=$scope.contacts[index].price,
    $scope.quantity=$scope.contacts[index].quantity,
    $scope.type=$scope.contacts[index].type,
    $scope.updateIndex=index
    }
  $scope.update=function(index){
    $scope.contacts[$scope.updateIndex]={
      name:$scope.name,
      price:$scope.price,
      quantity:$scope.quantity,
      type:$scope.type
      }	
      }
      $scope.delete=function(index){
        $scope.contacts.splice(index,1);
        }
});








app.controller("ordderCtrl",function($scope){
  
  $scope.title = "Order Info"
  $scope.contacts=[];
  $scope.addItem = function(){
    console.log('--------- ', $scope.pName)
    $scope.contacts.push({
      name: $scope.pName,
      advance: $scope.advance,
      quantity: $scope.quantity,
      color: $scope.color,
      contact: $scope.contact
      
       
    })
  };
  $scope.edit=function(index){
    $scope.pName=$scope.contacts[index].name,
    $scope.advance=$scope.contacts[index].advance,
    $scope.quantity=$scope.contacts[index].quantity,
    $scope.color=$scope.contacts[index].color,
    $scope.contact=$scope.contacts[index].contact,
    $scope.updateIndex=index
    }
  $scope.update=function(index){
    $scope.contacts[$scope.updateIndex]={
      name: $scope.pName,
      advance: $scope.advance,
      quantity: $scope.quantity,
      color: $scope.color,
      contact: $scope.contact
      }	
      }
      $scope.delete=function(index){
        $scope.contacts.splice(index,1);
        }
});




app.controller("SCtrl",function($scope){
  $scope.contacts=[];
  $scope.addItem = function(){
    $scope.contacts.push({
      name:$scope.name,
      date:$scope.date,
      payment:$scope.payment,
      details:$scope.details
       
    })
  }
  $scope.edit=function(index){
    $scope.name=$scope.contacts[index].name,
    $scope.date=$scope.contacts[index].date,
    $scope.payment=$scope.contacts[index].payment,
    $scope.details=$scope.contacts[index].details,
    $scope.updateIndex=index
    }
  $scope.update=function(index){
    $scope.contacts[$scope.updateIndex]={
      name:$scope.name,
      date:$scope.date,
      payment:$scope.payment,
      details:$scope.details
      }	
      }
      $scope.delete=function(index){
        $scope.contacts.splice(index,1);
        }
});






app.controller('Hom', function($scope) {

  $scope.imageSources = [];

    $scope.imageSources.push('image/Screenshot (11).png');
     $scope.imageSources.push('image/Screenshot (12).png');
     $scope.imageSources.push('image/Screenshot (10).png');

});




app.controller('Home', function($scope) {
  $scope.imageSources = [];
    $scope.imageSources.push('image/r15 (1).jpg');
});

app.controller('Homee', function($scope) {
  $scope.imageSources = [];
    $scope.imageSources.push('image/frezzer.jpg');
});

app.controller('Homeee', function($scope) {
  $scope.imageSources = [];
    $scope.imageSources.push('image/fzs.jpg');
});


// app.controller('hoCtrl',function($scope){
//   $scope.click=function(){
//     if($scope.){

//     }
//     alert("Go back to home page");
//     window.location.href="main.html";
//   }
  
  
// });
