var app = angular.module('translate', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  // Dictionaries
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    WORK_EXPE_TITLE: 'Work experience',
    
    FIRST_EXPE_TITLE: "Semantic Web design engineer",
    FIRST_EXPE_COMPANY: "2017 - today at LIRMM (Laboratory for informatics, robotics and microelectronics of Montpellier)",
    FIRST_EXPE_TXT: "<a href='https://github.com/sifrproject' target='_blank'>BioPortal Project</a><ul><li>Administration and development of a local instance of BioPortal (<a href='http://bioportal.bioontology.org' target='_blank'>NCBO</a> ontologies repository ) for <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> and <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a> projects</li><li>Feature development (ontologies metadata, text semantic annotation, multilingual annotation)</li><li> Put into production new prototypes within the platform</li></ul><br>Related publications:<ul><li><a href='https://hal.archives-ouvertes.fr/lirmm-01397388' target='_blank'>Modèle de métadonnées dans un portail d'ontologies</a></li></ul><br>Skills: Ruby (on Rails), JSON, OWL Ontologies, SKOS thesaurus, Docker, Linux administration (CentOS)",
    
    TWO_EXPE_TITLE: "Design and development engineer of the computer science department at LIRMM",
    TWO_EXPE_COMPANY: "2016 - 2017 at LIRMM / CNRS (National Center for Scientific Research)",
    TWO_EXPE_TXT: "<a href='https://github.com/sifrproject' target='_blank'>BioPortal Project</a><ul><li>Administration and development of a local instance of BioPortal (<a href='http://bioportal.bioontology.org' target='_blank'>NCBO</a>) for <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> et <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a> projects</li><li>Feature development (model for ontologies metadata, handling multilingual ontologies)</li></ul><br><a href='https://gite.lirmm.fr/advanse' target='_blank'>Advanse</a> team<ul><li>Development of a web platform to expose Natural Language Processing program developed at the Advanse team (HTTP API and interface): <a href='http://advanse.lirmm.fr' target='_blank'>advanse.lirmm.fr</a></li><li>Help packaging programs developed by the Advanse team</li><li>Advanse server administration (Slurm deployment)</li><li>Documentation production</li></ul><br><a href='https://gite.lirmm.fr/opendata' target='_blank'>Open Data</a> team<ul><li>Packaging, test et development of the Yam++ Large Scale tool (Maven Java project)</li><li>Development of a web interface and REST API to curate ontologies alignments</li></ul><br>Related publications<ul><li><a href='https://hal.archives-ouvertes.fr/lirmm-01395880' target='_blank'>Multilingual Mapping Reconciliation between English-French Biomedical Ontologies</a></li><li><a href='https://hal.archives-ouvertes.fr/lirmm-01397388/' target='_blank'>Modèle de métadonnées dans un portail d'ontologies</a></li></ul><br>Skills: Java (Maven, Tomcat sevlet), Ruby (on Rails), ontologies, Docker, Linux administration",
    
    THREE_EXPE_TITLE: "Design engineer for <a href='http://www.lirmm.fr/sifr/' target='_blank'>SIFR</a> project",
    THREE_EXPE_COMPANY: "2015 - 2016 at LIRMM",
    THREE_EXPE_TXT: "<ul><li>Administration of a local instance of BioPortal (ontologies repository NCBO) for <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> and <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a> project</li><li>Modification of this instance for our project needs (external mappings, french annotator)</li><li>Put into production new prototypes within the platform</li><li>Working with Ontologies</li></ul><br>Related publications:<ul><li><a href='https://hal.archives-ouvertes.fr/hal-01398252/document' target='_blank'>AgroPortal: an open repository of ontologies and vocabularies for agriculture and nutrition data</a></li><li><a href='http://ceur-ws.org/Vol-1747/D202_ICBO2016.pdf' target='_blank'>Reusing the NCBO BioPortal technology for agronomy to build AgroPortal</a></li><li><a href='https://hal.archives-ouvertes.fr/hal-01398250/' target='_blank'>SIFR BioPortal : Un portail ouvert et générique d’ontologies et de terminologies biomédicales françaises au service de l’annotation sémantique</a></li><li><a href='https://hal.archives-ouvertes.fr/lirmm-01395900' target='_blank'>Réconciliation d'alignements multilingues dans BioPortal</a></li></ul><br>Skills: Ruby (on Rails), JSON, OWL Ontologies, SKOS thesaurus, Docker, Linux administration (CentOS)"
  });
  
  $translateProvider.translations('fr', {
    TITLE: 'Salut',
    FOO: 'En français.',
    
    WORK_EXPE_TITLE: 'Expérience professionnelle',
    FIRST_EXPE_TITLE: "Ingénieur d'étude Web sémantique",
    FIRST_EXPE_COMPANY: "2017 - aujourd'hui au LIRMM, Laboratoire d'informatique, de robotique et de microélectronique de Montpellier",
    FIRST_EXPE_TXT: "<a href='https://github.com/sifrproject' target='_blank'>Projet BioPortal</a><ul><li>Administration et modification d'une instance locale de BioPortal (répertoire d'ontologies du <a href='http://bioportal.bioontology.org' target='_blank'>NCBO</a>) pour les projets <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> et <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a></li><li>Développement de fonctionnalités (metadata des ontologies, annotation multilingue)</li><li>Mise en production de nouveau prototypes au sein de la plateforme</li></ul><br>Publications:<ul><li><a href='https://hal.archives-ouvertes.fr/lirmm-01397388' target='_blank'>Modèle de métadonnées dans un portail d'ontologies</a></li></ul><br>Compétences : Ruby (on Rails), JSON, OWL Ontologies, SKOS thesaurus, Docker, administration Linux (CentOS)",
    
    TWO_EXPE_TITLE: "Ingénieur d'étude au département informatique du LIRMM",
    TWO_EXPE_COMPANY: "2016 - 2017 au LIRMM / CNRS (Centre National de la Recherche Scientifique)",
    TWO_EXPE_TXT: "<a href='https://github.com/sifrproject' target='_blank'>Projet BioPortal</a><ul><li>Administration et modification d'une instance locale de BioPortal (<a href='http://bioportal.bioontology.org' target='_blank'>NCBO</a>) pour les projets <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> et <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a></li><li>Développement de fonctionnalités (modèle de metadonnées pour ontologies, gestion d'ontologies multilangue)</li></ul><br>Equipe <a href='https://gite.lirmm.fr/advanse' target='_blank'>Advanse</a> (https://gite.lirmm.fr/advanse)<ul><li>Développement d'une plateforme Web pour exposer les programmes de Natural Language Processing développés par l'équipe Advanse (RESTful API et interface) : <a href='http://advanse.lirmm.fr' target='_blank'>advanse.lirmm.fr</a></li><li>Aide au packaging de programmes développés par l'équipe Advanse</li><li>Administration du serveur Advanse (mise en place de Slurm)</li><li>Production de documentation</li></ul><br>Equipe <a href='https://gite.lirmm.fr/opendata' target='_blank'>Open Data</a> (https://gite.lirmm.fr/opendata)<ul><li>Packaging, test et amélioration de l'outil de matching d'ontologies Yam++ Large Scale</li><li>Développement d'une interface Web de matching et de validation d'alignements d'ontologies</li></ul><br>Publications<ul><li><a href='https://hal.archives-ouvertes.fr/lirmm-01395880' target='_blank'>Multilingual Mapping Reconciliation between English-French Biomedical Ontologies</li><li><a href='https://hal.archives-ouvertes.fr/lirmm-01397388/' target='_blank'>Modèle de métadonnées dans un portail d'ontologies</a></li></ul><br>Compétences : Java (Maven, Tomcat), Ruby (on Rails), développement Web (HTML/CSS/AngularJS), ontologies, Docker, administration Linux",
    
    THREE_EXPE_TITLE: "Ingénieur d'étude du projet <a href='http://www.lirmm.fr/sifr/' target='_blank'>SIFR</a>",
    THREE_EXPE_COMPANY: "2015 - 2016 au LIRMM",
    THREE_EXPE_TXT: "<ul><li>Administration d'une instance locale de BioPortal (NCBO) pour les projets <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> and <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a></li><li>Modification de cette instance pour le besoin de nos projets (mappings externes, annotator en français)</li><li>Mise en production de nouveau prototypes au sein de la plateforme</li><li>Travail sur des Ontologies</li></ul><br>Publications:<ul><li><a href='https://hal.archives-ouvertes.fr/hal-01398252/document' target='_blank'>AgroPortal: an open repository of ontologies and vocabularies for agriculture and nutrition data</a></li><li><a href='http://ceur-ws.org/Vol-1747/D202_ICBO2016.pdf' target='_blank'>Reusing the NCBO BioPortal technology for agronomy to build AgroPortal</a></li><li><a href='https://hal.archives-ouvertes.fr/hal-01398250/' target='_blank'>SIFR BioPortal : Un portail ouvert et générique d’ontologies et de terminologies biomédicales françaises au service de l’annotation sémantique</a></li><li><a href='https://hal.archives-ouvertes.fr/lirmm-01395900' target='_blank'>Réconciliation d'alignements multilingues dans BioPortal</a></li></ul><br>Compétences : Ruby (on Rails), JSON, OWL Ontologies, SKOS thesaurus, Docker, administration Linux (CentOS)"
  });
  
  $translateProvider.preferredLanguage('en');
});


app.controller('TranslateCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
    // Change opacity of flags when selected
    if (key === "fr") {
      $("#frFlag").css("opacity", "1");
      $("#enFlag").css("opacity", "0.5");
    } else {
      $("#frFlag").css("opacity", "0.5");
      $("#enFlag").css("opacity", "1");
    }
  };
});

// To highlight select nav btn. Take the URL (after /, not taking what after #)
app.controller('HeaderController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    console.log($location);
        return viewLocation === $location.path();
    };
});