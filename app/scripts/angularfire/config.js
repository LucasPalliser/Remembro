angular.module('firebase.config', [])
  .constant('FBURL', 'https://remembro-5a43a.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook'])

  .constant('loginRedirectPath', '/login');
