app.config($stateProvider => {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'js/login/login.html',
    controller: 'LoginController'
  });
}).controller('LoginController', ($scope, User) => {
  $scope.newUser = {};
  $scope.signUp = () => {
    User.create($scope.newUser)
      .then(user => alert(`${user.name} created!`));
  };
});
