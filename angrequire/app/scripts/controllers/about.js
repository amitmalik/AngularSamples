'use strict';

/**
 * @ngdoc function
 * @name angrequireApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angrequireApp
 */
angular.module('angrequireApp')
  .controller('AboutCtrl', function ($scope, facebook) {

console.log(facebook);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
