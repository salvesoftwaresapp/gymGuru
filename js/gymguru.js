angular.module('gymguru', ['ionic', 'ngStorage', 'gymguru.controllers', 'gymguru.services'])

.run(function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
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
	      templateUrl: "templates/login.html",
	      controller: 'SignInCtrl'
	    })
    	
    .state('forgotpassword', {
      url: "/forgot-password",
      templateUrl: "templates/forgot-password.html"
    })
    
    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html",
      controller: 'SignUpCtrl'
    })
    
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    });

  

   $urlRouterProvider.otherwise("templates/tos");

});

