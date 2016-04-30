angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('navegar.pGinaInicialTabajaraProject', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pGinaInicialTabajaraProject.html',
        controller: 'pGinaInicialTabajaraProjectCtrl'
      }
    }
  })

  .state('navegar.horRios', {
    url: '/horarios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horRios.html',
        controller: 'horRiosCtrl'
      }
    }
  })

  .state('navegar.sobreNS', {
    url: '/sobre',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobreNS.html',
        controller: 'sobreNSCtrl'
      }
    }
  })

  .state('navegar', {
    url: '/side-menu21',
    templateUrl: 'templates/navegar.html',
    abstract:true
  })

  .state('navegar.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('navegar.cadastro', {
    url: '/cadastro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
      }
    }
  })

  .state('contato', {
    url: '/contato',
    templateUrl: 'templates/contato.html',
    controller: 'contatoCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/inicio')

  

});