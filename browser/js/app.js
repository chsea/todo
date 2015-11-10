'use strict';
const app = angular.module('Todo', ['ui.router', 'js-data']);

app.config(($urlRouterProvider, $locationProvider, DSProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  DSProvider.defaults.basePath = '/api';
  DSProvider.defaults.idAttribute = 'id';

  DSProvider.defaults.getOrFind = function(service) {
    let data = this.getAll();
    if (data.length) return Promise.resolve(angular.copy(data));
    else {
      return this.findAll().then(function(data) {
        return angular.copy(data);
      });
    }
  };
});
