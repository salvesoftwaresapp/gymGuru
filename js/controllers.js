angular.module('gymguru.controllers', ['gymguru.services'])

.controller('StartCtrl', function($rootScope, $scope, $localStorage, $window) {
	  
	 $scope.startUp = function() {
		   // console.log('Sign-In', user);
			if($localStorage.message == 'accept'){
				$window.location.href = ('#/login');
			}else{
				$window.location.href = ('#/tos');
			}
		  }
	 $scope.startUp();
})

.controller('TosCtrl', function($rootScope, $scope, $localStorage, $window) {
	  
	  $scope.loadLogin = function() {
	   // console.log('Sign-In', user);
		$localStorage.message = 'accept';
		$window.location.href = ('#/login');
	  }
	  $scope.exit = function() {
		   // console.log('Sign-In', user);
		  //navigator.app.exitApp();
	  };
	  
})

.controller('SignInCtrl', function ($rootScope, $scope, API, $window) {
    // if the user is already logged in, take him to his bucketlist
    if ($rootScope.isSessionActive()) {
        $window.location.href = ('#/home');
    }
 
    $scope.user = {
        email: "",
        password: ""
    };
 
    $scope.validateUser = function () {
        var email = this.user.email;
        var password = this.user.password;
        if(!email || !password) {
        	$rootScope.notify("Please enter valid credentials");
        	return false;
        }
        $rootScope.show('Please wait.. Authenticating');
        API.signin({
            email: email,
            password: password
        }).success(function (data) {
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/home');
        }).error(function (error) {
            $rootScope.hide();
            $rootScope.notify("Invalid Username or password");
        });
    }
    
    $scope.guestLogin = function () {
    	$window.location.href = ('#/home');
    }
 
})

.controller('SignUpCtrl', function ($rootScope, $scope, API, $window) {
    $scope.user = {
        email: "",
        password: "",
        name: "",
        username: "",
        contact: ""
    };
 
    $scope.createUser = function () {
    	var email = this.user.email;
        var password = this.user.password;
        var uName = this.user.name;
        var uuName = this.user.username;
        var uContact = this.user.contact;
        if(!email || !password || !uName || !uuName || !uContact) {
        	$rootScope.notify("Please enter valid data");
        	return false;
        }
        $rootScope.show('Please wait.. Registering');
        API.signup({
            email: email,
            password: password,
            name: uName
        }).success(function (data) {
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/home');
        }).error(function (error) {
            $rootScope.hide();
        	if(error.error && error.error.code == 11000)
        	{
        		$rootScope.notify("A user with this email already exists");
        	}
        	else
        	{
        		$rootScope.notify("Oops something went wrong, Please try again!");
        	}
            
        });
    }
});


	/*.controller('HomeTabCtrl', function($scope) {
	  console.log('HomeTabCtrl');
	});*/