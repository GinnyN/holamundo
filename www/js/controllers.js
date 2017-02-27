angular.module('starter.controllers', [])

.controller('appCtrl', function($scope, $http) {
  $scope.login = function(){
    console.log($scope.user);
    $http({
  method: 'PUT',
  url: 'https://dev.tuten.cl:443/TutenREST/rest/user/'+$scope.user.email,
  headers: {
    password: $scope.user.password,
    app: 'APP_CLI'
  }
}).then(function successCallback(response) {
    console.log(response);
    $scope.data = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  }
  
});
