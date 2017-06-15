var app = angular.module('translate', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  // Dictionaries
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    FIRST_EXPE_TITLE: "Semantic Web design engineer",
    FIRST_EXPE_COMPANY: "2017 - today at LIRMM (Laboratory for informatics, robotics and microelectronics of Montpellier)",
    FIRST_EXPE_TXT: "BioPortal Project (https://github.com/sifrproject)<ul><li>Administration and development of a local instance of BioPortal (NCBO ontologies repository ) for SIFR et IBC projects (http://bioportal.lirmm.fr et http://agroportal.lirmm.fr)</li><li>Feature development (ontologies metadata, text semantic annotation, multilingual annotation)</li><li> Put into production new prototypes within the platform</li></ul><br>Related publications:<ul><li>Modèle de métadonnées dans un portail d'ontologies ( https://hal.archives-ouvertes.fr/lirmm-01397388 )</li></ul><br>Skills: Ruby (on Rails), JSON, OWL Ontologies, SKOS thesaurus, Docker, Linux administration (CentOS)",
    TWO_EXPE_TITLE: "Design and development engineerof the computer science department at LIRMM",
    TWO_EXPE_COMPANY: "2016 - 2017 at LIRMM / CNRS (National Center for Scientific Research)",
    TWO_EXPE_TXT: "BioPortal Project (https://github.com/sifrproject)<ul><li>Administration et development of a local instance of BioPortal (NCBO) for SIFR et IBC projects (http://bioportal.lirmm.fr et http://agroportal.lirmm.fr)</li><li>Feature development (model for ontologies metadata, handling multilingual ontologies)</li></ul><br>Advanse team (https://gite.lirmm.fr/advanse)<ul><li>Development of a web platform to expose Natural Language Processing program developed at the Advanse team (HTTP API and interface): http://advanse.lirmm.fr</li><li>Help packaging programs developed by the Advanse team</li><li>Advanse server administration (Slurm deployment)</li><li>Documentation production</li></ul><br>Open Data team (https://gite.lirmm.fr/opendata)<ul><li>Packaging, test et development of the Yam++ Large Scale tool (Maven Java project)</li><li>Development of a web interface and REST API to curate ontologies alignments</li></ul><br>Related publications<ul><li>Multilingual Mapping Reconciliation between English-French Biomedical Ontologies ( https://hal.archives-ouvertes.fr/lirmm-01395880 )</li><li>Modèle de métadonnées dans un portail d'ontologies ( https://hal.archives-ouvertes.fr/lirmm-01397388/ )</li></ul><br>Skills: Java (Maven, Tomcat sevlet), Ruby (on Rails), ontologies, Docker, Linux administration",
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'german'
  });
  $translateProvider.translations('fr', {
    TITLE: 'Salut',
    FOO: 'En français.',
    FIRST_EXPE_TITLE: "Ingénieur d'étude Web sémantique",
    FIRST_EXPE_COMPANY: "2017 - aujourd'hui au LIRMM, Laboratoire d'informatique, de robotique et de microélectronique de Montpellier",
    FIRST_EXPE_TXT: "Projet BioPortal (https://github.com/sifrproject)<ul><li>Administration et modification d'une instance locale de BioPortal (répertoire d'ontologies du NCBO) pour le projet SIFR et IBC (http://bioportal.lirmm.fr et http://agroportal.lirmm.fr)</li><li>Développement de fonctionnalités (metadata des ontologies, annotation multilingue)</li><li>Mise en production de nouveau prototypes au sein de la plateforme</li></ul><br>Publications:<ul><li>Modèle de métadonnées dans un portail d'ontologies ( https://hal.archives-ouvertes.fr/lirmm-01397388 )</li></ul><br>Compétences : Ruby (on Rails), JSON, OWL Ontologies, SKOS thesaurus, Docker, administration Linux (CentOS)",
    TWO_EXPE_TITLE: "Ingénieur d'étude au département informatique du LIRMM",
    TWO_EXPE_COMPANY: "2016 - 2017 au LIRMM / CNRS (Centre National de la Recherche Scientifique)",
    TWO_EXPE_TXT: "Projet BioPortal (https://github.com/sifrproject)<ul><li>Administration et modification d'une instance locale de BioPortal (NCBO) pour le projet SIFR et IBC (http://bioportal.lirmm.fr et http://agroportal.lirmm.fr)</li><li>Développement de fonctionnalités (modèle de metadonnées pour ontologies, gestion d'ontologies multilangue)</li></ul><br>Equipe Advanse (https://gite.lirmm.fr/advanse)<ul><li>Développement d'une plateforme Web pour exposer les programmes de Natural Language Processing développés par l'équipe Advanse (RESTful API et interface) : http://advanse.lirmm.fr</li><li>Aide au packaging de programmes développés par l'équipe Advanse</li><li>Administration du serveur Advanse (mise en place de Slurm)</li><li>Production de documentation</li></ul><br>Equipe Open Data (https://gite.lirmm.fr/opendata)<ul><li>Packaging, test et amélioration de l'outil de matching d'ontologies Yam++ Large Scale</li><li>Développement d'une interface Web de matching et de validation d'alignements d'ontologies</li></ul><br>Publications<ul><li>Multilingual Mapping Reconciliation between English-French Biomedical Ontologies ( https://hal.archives-ouvertes.fr/lirmm-01395880 )</li><li>Modèle de métadonnées dans un portail d'ontologies ( https://hal.archives-ouvertes.fr/lirmm-01397388/ )</li></ul><br>Compétences : Java (Maven, Tomcat), Ruby (on Rails), développement Web (HTML/CSS/AngularJS), ontologies, Docker, administration Linux",
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