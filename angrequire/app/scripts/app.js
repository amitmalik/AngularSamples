'use strict';

/**
 * @ngdoc overview
 * @name angrequireApp
 * @description
 * # angrequireApp
 *
 * Main module of the application.
 */
angular
  .module('angrequireApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'facebook'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/fbLogin.html',
        controller: 'fbCTRL'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     FacebookProvider.init('896384197079527');
  });
