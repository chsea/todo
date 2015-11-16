app.service('Session', function() {
  this.user = null;

  this.create = user => this.user = user;
  this.destroy = () => this.user = null;
});

app.service('AuthService', function(Session, $http, $rootScope) {
  let logIn = res => {
    let user = res.data;
    Session.create(user);
    $rootScope.$broadcast('login');
    return user;
  };

  this.login = user => $http.post('/login', user).then(logIn);
  this.logout = () => $http.get('/logout').then(() => {
    $rootScope.$broadcast('logout');
    Session.destroy();
  });

  this.getUser = () => {
    if (Session.user) return Session.user;
    return $http.get('/session').then(logIn);
  };
});
