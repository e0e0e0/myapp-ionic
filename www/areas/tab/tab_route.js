
/*总路由*/

angular.module('tab.route', ['tab.controller'])

    .config(function($stateProvider, $urlRouterProvider) {


      $stateProvider
        .state('tab', {
          url: '/tab',
          templateUrl: 'areas/tab/tab.html',
          controller: 'TabCtrl'
        })

    });
