app.factory('User', DS => DS.defineResource('users'))
  .run(User => {});
