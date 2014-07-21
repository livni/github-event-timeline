'use strict';

/**
 * @ngdoc function
 * @name githubEventTimelineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githubEventTimelineApp
 */
angular.module('githubEventTimelineApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
