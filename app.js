var myApp = angular.module('myApp', ['ngMessages']);////////////...End myApp Module....//////////

myApp.controller('mainController', ['$scope', '$log', '$timeout', '$interval', '$filter', function($scope, $log, $timeout, $interval, $filter){
    
    /************************************/
    ///////...Creating Scope...///////////
    /************************************/
    $scope.name = 'Robi';
    
    $timeout(function(){
        $scope.name = 'Everybody';
    }, 3000);
    
    
    /************************************/
    ///.......2 Way Data Binding...../////
    /************************************/
    $scope.twitterHandle = '';
    $scope.charecters = 12;
    
    $scope.rules = [
        {rulename: "Must be 6 charecters" },
        {rulename: "Must not be used elsewhere" },
        {rulename: "Must be cool" }
    ];
    
    $scope.lowercaseTwitterHandle = function(){
        return $filter('lowercase')($scope.twitterHandle);
    }//End 2 Way Data Binding....
    
    //.....Auto Insert...using $timeout service or Injected object $timeout....
    $timeout(function(){
        $scope.twitterHandle = "dm..";
    }, 1000);
    ///doing same thing using javascript timeout function...
    /*setTimeout(function(){
        $scope.$apply(function(){
            $scope.twitterHandle = "logicpen";
        }
    )}, 1000);*/
    
    //Watching AngularJS Diisgetion Loop......
    $scope.$watch('twitterHandle', function(newValue, oldValue){
        console.log('Changed!');
        console.log('Old: '+ oldValue);
        console.log('New: '+ newValue);
    });

//  $interval(function(){
//      $log.info($scope.twitterHandle);
//  }, 1000);
    
    
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
    
    $scope.alertClick = function(){
        alert("Clicked!");
    };
                                    
}]);//......End mainController..........

myApp.controller('secondController', ['$scope', function($scope){
    
    $scope.name = "Second Controller";
    $scope.details = "This second Controller to manage more data.";

}]);