angular.module("angular-typewriter")

.directive("angular-typewriter", function ($interval) {

    return {
      restrict: 'EA',
      scope: {
        inputter: '@',
        speed: '@'
      },
      template: '<p>{{currentString}}</p>',
      controller: function ($scope) {

        var dataToType = angular.copy($scope.inputter);
        $scope.currentString = '';

        var counter = 0;

        while (counter < dataToType.length){
          $interval(function () {
            $scope.currentString += dataToType.charAt(counter);
            counter++;
          }, $scope.speed)
        }
      }
    }
  })