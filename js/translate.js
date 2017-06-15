var app = angular.module('translate', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  // Dictionaries
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    FIRST_EXPE_TITLE: "Semantic Web design engineer",
    FIRST_EXPE_TXT: "BioPortal Project (https://github.com/sifrproject)<ul><li>Administration and development of a local instance of BioPortal (NCBO ontologies repository ) for SIFR et IBC projects (http://bioportal.lirmm.fr et http://agroportal.lirmm.fr)</li><li>Feature development (ontologies metadata, text semantic annotation, multilingual annotation)</li><li> Put into production new prototypes within the platform</li></ul>",
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'german'
  });
  $translateProvider.translations('fr', {
    TITLE: 'Salut',
    FOO: 'En français.',
    FIRST_EXPE_TITLE: "Ingénieur d'étude Web sémantique",
    FIRST_EXPE_TXT: "Projet BioPortal (https://github.com/sifrproject)<ul><li>Administration et modification d'une instance locale de BioPortal (répertoire d'ontologies du NCBO) pour le projet SIFR et IBC (http://bioportal.lirmm.fr et http://agroportal.lirmm.fr)</li><li>Développement de fonctionnalités (metadata des ontologies, annotation multilingue)</li><li>Mise en production de nouveau prototypes au sein de la plateforme</li></ul>",
    BUTTON_LANG_EN: 'englisch',
    BUTTON_LANG_DE: 'deutsch'
  });
  $translateProvider.preferredLanguage('en');
});

app.controller('TranslateCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});

// To highlight select nav btn. Take the URL (after /, not taking what after #)
app.controller('HeaderController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    console.log($location);
        return viewLocation === $location.path();
    };
});