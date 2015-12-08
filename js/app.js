

angular.module('App', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url:'/home',
                templateUrl: 'views/main.html',
                controller: 'ContactsController'
            });

        $urlRouterProvider.otherwise('/home');
    })
    .controller('MainCtrl', function($scope) {

    });