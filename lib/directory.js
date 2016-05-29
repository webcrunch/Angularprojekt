var App = angular.module('Papp', ['ngRoute']);
/*App.factory('fetchFactory', function($http){
  return{
    json: function(callback){
      $http.get('information.json').success(callback);
    }
  };
});
*/
App.factory('fetchSql', function($http){
  var factory = {};

  factory.sql = function(callback){
      $http.get('php/get_info.php').success(callback);
  }
  factory.json = function(callback){
      $http.get('information.json').success(callback);
  }
  return factory;
});

App.controller('fetchCtrl', function($scope, fetchSql){
  fetchSql.json(function(fetchSql){
    $scope.peeps = fetchSql;

  });
  $scope.switch1 = function(){
    $scope.falsify_ = !$scope.falsify_;
    console.log($scope.falsify_);
  }
});

App.controller('fetchSQL', function($scope, fetchSql){
  fetchSql.sql(function(fetchSql){
    $scope.persons = fetchSql;
  });
  
 $scope.switch2 = function(){
    $scope.falsifyF = !$scope.falsifyF;
    console.log($scope.falsifyF);
  }
});
App.controller('sqlpush', function($scope, $http){
  
})


App.controller('insertSQL', function($scope, $http){
 $scope.addPerson = function()/*,street, land, city, job, payment*/ {
    /*console.log("name: " + name );/* + " " +  "street: " +  street + " " + "land: " + land +  " " 
      +  "city: " +  city + " " + "job: " + job + " " +  "payment: " +  payment */
    $http.post("add_person.php",{'name': $scope.name, })
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
            console.log(name);
        });
    /*$http.post("add_person.php?insert=" + name).success(function(data){
    console.log(name);*//* + street + land + city +
    job + payment

    $http.post("server/insert.php",{'fstname': $scope.newFriend.fname, 'lstname': $scope.newFriend.lname})
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");

$scope.addNewFriend = function(add){
        var data = {
            fname:$scope.newFriend.fname,
            lname:$scope.newFriend.lname
        }
        $http.post("server/insert.php",{'fstname': $scope.newFriend.fname, 'lstname': $scope.newFriend.lname})
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
        });
    */
    
      }/*);*/
  

})


/*
App.controller('insertSQL', ['', function($scope){
  $scope.add_person = function(persInput) {
    console.log(persInput);
  }
  
}])*/