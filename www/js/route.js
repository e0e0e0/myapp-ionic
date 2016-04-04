

/*总路由*/

angular.module('route', ['tab.route','home.route','guidePage.route'])

    .config(function($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/tab/home');
    });
