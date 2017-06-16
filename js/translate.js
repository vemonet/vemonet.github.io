var app = angular.module('translate', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  // Dictionaries
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    WORK_EXPE_TITLE: 'Work experience',
    
    FIRST_EXPE_TITLE: "Semantic Web design engineer",
    FIRST_EXPE_COMPANY: "2017 - today at LIRMM (Laboratory for informatics, robotics and microelectronics of Montpellier)",
    FIRST_EXPE_TXT: "<ul><li>Administration and new features development on <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> and <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a> platforms, used for ontology storage, exploration and text annotation (Ruby on Rails & Java): github.com/sifrproject</li><li>Kept compatibility with main version of the NCBO BioPortal (tests)</li><li>Packaged, integrated and documented Natural Language Processing programs for the <a href='https://gite.lirmm.fr/advanse' target='_blank'>ADVANSE</a> team, available at <a href='https://advanse.lirmm.fr' target='_blank'> (Java)</li><li>AngularJS, Linux administration): gite.lirmm.fr/advanse</li><li>Enhanced and packaged the <a href='https://gite.lirmm.fr/opendata' target='_blank'>YAM++ ontologies matching tool</a> (Java)</li><li>Developped a <a href='http://yamplusplus.lirmm.fr/' target='_blank'>web interface</a> for ontologies mappings validation (JEE)</li></ul>",
    
    TWO_EXPE_TITLE: "JAVA/Talend developer",
    TWO_EXPE_COMPANY: "9 months in 2013 and 2014 at CHU de Québec research center",
    TWO_EXPE_TXT: "<ul><li>Co-administrator of the bio2rdf.org project.</li><li>Set up and use of a Hadoop data platform on a cluster of CentOS servers.</li><li>Develop web RESTful services that consume RDF data using Talend ETL.</li><li>Develop Talend ETL components for the semantic web using Java.</li><li>Develop Java programs that convert public biological databases to RDF format (pubmed, nextprot).</li></ul><br>Skills : semantic web, Java, JSON/XML, RESTful services, ETL.<br>Publication : <a href='http://ceur-ws.org/Vol-1272/paper_121.pdf' target='_blank'>Bio2RDF Release 3: A Larger Connected Network of Linked Data for the Life Sciences</a>",
    
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
    FIRST_EXPE_TXT: "<ul><li>Administration et développement des plateformes de stockage et d'exploitation d'ontologies <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> et <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a></li><li>Implémentations de nouvelles fonctionnalités aux <a href='https://github.com/sifrproject' target='_blank'>services BioPortal</a> (Ruby on Rails et Java) : ontologies metadata, mappings, annotation de texte</li><li>Gestion de la compatibilité avec la version principale du <a href='http://bioportal.bioontology.org' target='_blank'>NCBO BioPortal</a></li><li>Intégration, consolidation et documentation de programmes de fouilles de données et de traitement du langage naturel pour l'équipe <a href='https://gite.lirmm.fr/advanse' target='_blank'>ADVANSE</a>: gite.lirmm.fr/advanse (Java, AngularJS, administration Linux)</li><li>Amélioration de l’outil de matching d’ontologies <a href='https://gite.lirmm.fr/opendata' target='_blank'>YAM++</a> (Java)</li><li>Développement d’une <a href='http://yamplusplus.lirmm.fr/' target='_blank'>interface web</a> pour la validation de mappings entre ontologies (JEE)</li></ul>",
    
    TWO_EXPE_TITLE: "Programmeur Java/Talend en BioInformatique",
    TWO_EXPE_COMPANY: "9 mois entre 2013 et 2014 au Centre de recherche du CHU de Québec",
    TWO_EXPE_TXT: "<ul><li>Co-administrator of the bio2rdf.org project.</li><li>Set up and use of a Hadoop data platform on a cluster of CentOS servers.</li><li>Develop web RESTful services that consume RDF data using Talend ETL.</li><li>Develop Talend ETL components for the semantic web using Java.</li><li>Develop Java programs that convert public biological databases to RDF format (pubmed, nextprot).</li></ul><br>Skills : semantic web, Java, JSON/XML, RESTful services, ETL.<br>Publication : <a href='http://ceur-ws.org/Vol-1272/paper_121.pdf' target='_blank'>Bio2RDF Release 3: A Larger Connected Network of Linked Data for the Life Sciences</a>",
    
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