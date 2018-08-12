var module = angular.module("clockModule", []);
module.controller("TimeCtrl", TimeCtrl);

function TimeCtrl($scope) {
    var currentDate = new Date();
    $scope.timeString = currentDate.toString();
    $scope.updateTime = function () {
        var currentDate = new Date();
        $scope.timeString = currentDate.toString();
    }
}