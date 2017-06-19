var app = angular.module('translate', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  // Dictionaries
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    WORK_EXPE_TITLE: 'Work experience',
    
    FIRST_EXPE_TITLE: "Semantic Web design engineer",
    FIRST_EXPE_COMPANY: "2017 - today at <i>LIRMM</i> (Laboratory for informatics, robotics and microelectronics of Montpellier)",
    FIRST_EXPE_TXT: `
<ul>
  <li>Administration and new features development on <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> and <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a> platforms, used for ontology storage, exploration and text annotation (Ruby on Rails & Java): github.com/sifrproject</li>
  <li>Kept compatibility with main version of the NCBO BioPortal (tests)</li>
  <li>Packaged, integrated and documented Natural Language Processing programs for the <a href='https://gite.lirmm.fr/advanse' target='_blank'>ADVANSE</a> team, available at <a href='https://advanse.lirmm.fr' target='_blank'>advanse.lirmm.fr</a> (Java)</li>
  <li>AngularJS, Linux administration): gite.lirmm.fr/advanse</li>
  <li>Enhanced and packaged the <a href='https://gite.lirmm.fr/opendata' target='_blank'>YAM++ ontologies matching tool</a> (Java)</li>
  <li>Developped a <a href='http://yamplusplus.lirmm.fr/' target='_blank'>web interface</a> for ontologies mappings validation (JEE)</li>
</ul>`,
    
    TWO_EXPE_TITLE: "JAVA/Talend developer",
    TWO_EXPE_COMPANY: "9 months in 2013 and 2014 at <i>CHU de Québec</i> research center",
    TWO_EXPE_TXT: `
<ul>
  <li>Co-administrator of the <a href='http://bio2rdf.org/' target='_blank'>Bio2RDF</a> project.</li>
  <li>Set up and use of a Hadoop data platform on a cluster of CentOS servers.</li>
  <li>Develop web <a href='https://github.com/bio2rdf/bio2rdf-rest' target="_blank">RESTful services</a> that consume RDF data using Talend ETL.</li>
  <li>Develop <a href='https://github.com/vemonet/talend4sw' target='_blank'>Talend ETL components</a> for the semantic web using Java.</li>
  <li>Develop Java programs that convert public biological databases to RDF format (PubMed, neXtProt).</li>
</ul><br>
Skills : semantic web, Java, JSON/XML, RESTful services, ETL.<br>
Publication : <a href='http://ceur-ws.org/Vol-1272/paper_121.pdf' target='_blank'>Bio2RDF Release 3: A Larger Connected Network of Linked Data for the Life Sciences</a>`,
    
    THREE_EXPE_TITLE: "Research assistant in bioinformatics",
    THREE_EXPE_COMPANY: "3 months during 2012 in <a href='https://nature.berkeley.edu/almeidalab/' target='_blank'>Almeida lab</a> at <i>University of California Berkeley</i>",
    THREE_EXPE_TXT: `
<ul>
  <li>Development of informatics tools to help the analysis of the evolution of Xyllela fastidiosa using the Python 2.7 programming language.</i>
  <li>Installation of an Amazon Machine Image based on Linux (for Amazon Web Services)</li>
</ul><br>
Skills: Python, DNA sequence analysis
`,
    
    FOUR_EXPE_TITLE: "Laboratory technician",
    FOUR_EXPE_COMPANY: "3 months during 2011 at <i>INSERM</i> in Nice, France",
    FOUR_EXPE_TXT: `Use of quantitative PCR and western blot to study expression of DNA and proteins in a laboratory that studies the mechanisms and therapeutic approaches of metabolic dysfunction and diabetes (INSERM Unit 907)`,
    
    FIRST_EDU_TITLE: "Master's degree, Physiology, biotechnology and computer science",
    FIRST_EDU_LOCATION: "2012 - 2014 at <i>University of Poitiers</i>, France",
    FIRST_EDU_TXT: `Biotechnology specialization
<ul>
  <li>Java, JEE and Android development</li>
  <li>Database administration (Oracle)</li>
  <li>Project management</li>
  <li>Knowledges in biotechnology and physiology.</li>
</ul>`,
    
    TWO_EDU_TITLE: "Licence Génie physiologique et informatique",
    TWO_EDU_LOCATION: "2011 - 2012 at <i>University of Poitiers</i>, France",
    TWO_EDU_TXT: `
<ul>
  <li>Ada and C programming</li>
  <li>Database management and website creation using HTML/CSS/PHP</li>
  <li>Knowledges in genetics, physiology and medical imaging.</li>
  <li>Active member of a student association</li>
</ul>`,
    
    THREE_EDU_TITLE: "Technical college diploma, bioengineering",
    THREE_EDU_LOCATION: "2009 - 2011 at <i>Université du Sud</i>, Toulon, France",
    THREE_EDU_TXT: `Biology and biochimistry analysis specialization
<ul>
  <li>Knowledges in genetics, biochemistry, molecular biology, physiology and microbiology.</li>
  <li>Wet lab manipulations.</li>
</ul>`
    
    
  });
  
  $translateProvider.translations('fr', {
    TITLE: 'Salut',
    FOO: 'En français.',
    
    WORK_EXPE_TITLE: 'Expérience professionnelle',
    FIRST_EXPE_TITLE: "Ingénieur d'étude Web sémantique",
    FIRST_EXPE_COMPANY: "2017 - aujourd'hui au <i>LIRMM</i>, Laboratoire d'informatique, de robotique et de microélectronique de Montpellier",
    FIRST_EXPE_TXT: `
<ul>
  <li>Administration et développement des plateformes de stockage et d'exploitation d'ontologies <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> et <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a></li>
  <li>Implémentations de nouvelles fonctionnalités aux <a href='https://github.com/sifrproject' target='_blank'>services BioPortal</a> (Ruby on Rails et Java) : ontologies metadata, mappings, annotation de texte</li>
  <li>Gestion de la compatibilité avec la version principale du <a href='http://bioportal.bioontology.org' target='_blank'>NCBO BioPortal</a></li>
  <li>Intégration, consolidation et documentation de programmes de fouilles de données et de traitement du langage naturel pour l'équipe <a href='https://gite.lirmm.fr/advanse' target='_blank'>ADVANSE</a>, accessible à <a href='https://advanse.lirmm.fr' target='_blank'>advanse.lirmm.fr</a> (Java)</li>
  <li>Amélioration de l’outil de matching d’ontologies <a href='https://gite.lirmm.fr/opendata' target='_blank'>YAM++</a> (Java)</li>
  <li>Développement d’une <a href='http://yamplusplus.lirmm.fr/' target='_blank'>interface web</a> pour la validation de mappings entre ontologies (JEE)</li>
</ul>`,
    
    TWO_EXPE_TITLE: "Programmeur Java/Talend en BioInformatique",
    TWO_EXPE_COMPANY: "9 mois entre 2013 et 2014 au Centre de recherche du <i>CHU de Québec</i>",
    TWO_EXPE_TXT: `
<ul>
  <li>Co-administrateur du projet <a href='http://bio2rdf.org/' target='_blank'>Bio2RDF</a></li>
  <li>Développement de <a href='https://github.com/bio2rdf/bio2rdf-rest' target="_blank">web services RESTful</a> gestion de données biologiques au format RDF.</li>
  <li>Développement de <a href='https://github.com/vemonet/talend4sw' target='_blank'>composants d’ETL Talend</a> en Java pour le web sémantique.</li>
  <li>Conversion de bases de données biologiques au format RDF (PubMed, neXtProt) avec Java et l'ETL Talend.</li>
  <li>Mise en place d’une plateforme Hadoop pour le Big Data sur des serveurs CentOS</li>
</ul><br>
Skills : semantic web, Java, JSON/XML, RESTful services, ETL.<br>
Publication : <a href='http://ceur-ws.org/Vol-1272/paper_121.pdf' target='_blank'>Bio2RDF Release 3: A Larger Connected Network of Linked Data for the Life Sciences</a>`,
    
    THREE_EXPE_TITLE: "Assistant de recherche en BioInformatique",
    THREE_EXPE_COMPANY: "3 mois en 2012 à <a href='https://nature.berkeley.edu/almeidalab/' target='_blank'>Almeida lab</a> à <i>University of California Berkeley</i>",
    THREE_EXPE_TXT: `
<ul>
  <li>Création de programmes d'analyses de séquences ADN dans le cadre de l'analyse de l'évolution de la bactérie Xyllela fastidiosa en utilisant le langage de programmation Python 2.7.</i>
  <li>Péparation d'une Amazon Machine Image basé sur Linux (afin de pouvoir utiliser ensuite le service Cloud Amazon Web Service)</li>
</ul><br>
Compétences : Python, analyse de séquences ADN`,
    
    FOUR_EXPE_TITLE: "Technicien de laboratoire",
    FOUR_EXPE_COMPANY: "3 mois en 2011 à l'INSERM à Nice, France",
    FOUR_EXPE_TXT: `Etude de l'expression de l'ADN et des protéines en utilisant la PCR quantitative et le western blot dans un laboratoire qui étudie les mécanismes et les approches thérapeutiques des dysfonctionnement métaboliques et du diabète (INSERM, unité 907)`,
    
    FIRST_EDU_TITLE: "Master Génie physiologique, biotechnologique et informatique",
    FIRST_EDU_LOCATION: "2012 - 2014 à <i>Université de Poitiers</i>, France",
    FIRST_EDU_TXT: `Master Professionnel, spécialisation Biotechnologies.
<ul>
  <li>Apprentissage programmation en Java, JEE et Android</li>
  <li>Gestion de projet (Scrum).</li>
  <li>Configuration de pro-logiciel LIMS.</li>
  <li>Oracle (PL/SQL)</li>
</ul>`,
    
    TWO_EDU_TITLE: "Licence Génie physiologique et informatique",
    TWO_EDU_LOCATION: "2011 - 2012 à <i>Université de Poitiers</i>, France",
    TWO_EDU_TXT: `
<ul>
  <li>Apprentissage de la programmation en C et en ADA.</li>
  <li>Gestion de base de données (SQL) et création d'un site en HTML/CSS/PHP.</li>
  <li>Acquisition de connaissances en physiologie, génétique et imagerie médicale.</li>
  <li>Membre actif d'une association étudiante</li>
</ul>`,
    
    THREE_EDU_TITLE: "DUT Génie biologique",
    THREE_EDU_LOCATION: "2009 - 2011 à <i>Université du Sud</i>, Toulon, France",
    THREE_EDU_TXT: `Option analyse biologique et biochimique
<ul>
  <li>Acquisition de connaissances en génie génétique, biochimie, microbiologie et physiologie.</li>
  <li>Travail en laboratoire.</li>
</ul>`
    
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
    return viewLocation === $location.path();
  };
});