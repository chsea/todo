app.config($stateProvider => {
  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'js/main/main.html',
    controller: 'MainController'
  });
}).controller('MainController', ($scope, User) => {

});
