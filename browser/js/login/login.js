app.config($stateProvider => {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'js/login/login.html',
    controller: 'LoginController'
  });
}).controller('LoginController', ($scope, User, AuthService) => {
  $scope.user = {};
  $scope.login = () => AuthService.login($scope.user).then(user => console.log(user));

  $scope.newUser = {};
  $scope.signUp = () => {
    User.create($scope.newUser)
      .then(user => AuthService.login({username: user.username, password: $scope.newUser.password}))
      .then(user => console.log(user));
  };
});
