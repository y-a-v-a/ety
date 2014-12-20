var etyApp = angular.module('etyApp', []);

etyApp.controller('etyCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.fetch = function() {
        $scope.sources = [];
        if (typeof $scope.text !== 'undefined' && $scope.text.length > 2) {
            $http.get('/query/' + encodeURIComponent($scope.text))
            .success(function(data) {
                $scope.term = data.term
                $scope.terms = data.results;
            });
        }
    }
    
    $scope.show = function(ev) {
        ev.preventDefault();
        var word = ev.target.href.replace(/^.*\//,'');
        
        $http.get('/show/' + encodeURIComponent(word))
        .success(function(data) {
            $scope.sources = data.sources;
        });
    }
}]);

etyApp.filter("sanitize", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}]);
