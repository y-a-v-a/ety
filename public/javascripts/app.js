var codeIndexApp = angular.module('etyApp', []);

codeIndexApp.controller('etyCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.fetch = function() {
        $http.get('/query/' + encodeURIComponent($scope.text))
        .success(function(data) {
            $scope.term = data.term
            $scope.terms = data.results;
        });
    }
    
    $scope.show = function(ev) {
        ev.preventDefault();
        $http.get('/show/' + encodeURIComponent($scope.text))
        .success(function(data) {
            $scope.sources = data.sources;
        });
    }
}]);
