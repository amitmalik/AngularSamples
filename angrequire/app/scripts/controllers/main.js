'use strict';

/**
 * @ngdoc function
 * @name angrequireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angrequireApp
 */
angular.module('angrequireApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
