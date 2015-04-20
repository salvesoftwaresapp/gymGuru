angular.module('gymguru', ['ionic', 'ngStorage', 'gymguru.controllers', 'gymguru.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tos', {
      url: "/tos",
      templateUrl: "templates/tos.html",
      controller: 'TosCtrl'
    })
    
    .state('login', {
	      url: "/login",
	     // abstract: true,
	      templateUrl: "templates/login.html",
	      controller: 'SignInCtrl'
	    })
    	
    .state('forgotpassword', {
      url: "/forgot-password",
      templateUrl: "templates/forgot-password.html"
    })
    
    .state('register', {
      url: "/register",
     // abstract: true,
      templateUrl: "templates/register.html",
      controller: 'SignUpCtrl'
    })
    
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    });

  

   $urlRouterProvider.otherwise('/tos');

});

