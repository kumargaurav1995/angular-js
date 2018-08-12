var module = angular.module("detailsModule", []);
module.controller("detailsCtrl", detailsCtrl);
module.controller("consoleCtrl", consoleCtrl);

function detailsCtrl($scope) {
    
    $scope.updateDetails = function() {
        var update = "Updated!!";
        $scope.up1 = update;

    }
}
function consoleCtrl($scope) {
    $scope.textboxChange = function() {
       console.log("Success!!")
    }
}