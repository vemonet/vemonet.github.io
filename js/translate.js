var app = angular.module('translate', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  // Dictionary for english
  $translateProvider.translations('en', {
    PROJECTS_TITLE: "Projects",
    SKILLS_TITLE: "Skills",
    
    DDL_CV_LABEL: 'Resume',
    DDL_CV_FILE: 'resources/RESUME_VincentEmonet.pdf',
    
    ABOUT_TEXT: `<p><i>I like RDF, SPARQL, and biking. I like diversity, but also standards.</i></p>

    Previously working as a research engineer at the LIRMM (Laboratory of Informatics, Robotics, Microelectronics of Montpellier) on a number of projects linked to the semantic web and ontologies:
<ul>
  <li>SIFR BioPortal and AgroPortal web services: two web ontology repositories allowing users to annotate text with the stored ontologies.</li>
  <li>Yam++: a web tool to discover mappings between ontologies.</li>
</ul>
<p>This work has allowed me to consolidate both my developing skills (Java, Web, Ruby, Shell) and my knowledge of the semantic web, linked data and ontologies. I have been introduced to Natural Language Processing and have learnt to use various tools, including Docker.</p>

<p>I worked a few more months on Natural Language Understanding by joining the Match Group R&D team to work on a domestic Chatbot solution development. Then I joined the Institute of Data Science in Maastricht University to develop a framework to generate services out of structured data using semantically meaningful data model.</p>

<p>But while completing my master’s degree in Bioinformatics, I worked on the Bio2RDF project at the Quebec University Hospital research centre. Here, I built up a strong understanding of data processing through my use of ETL and Java began working with Linked Data and big amount of data.</p>

<p>Making new discoveries acts a great source of motivation for me. This curiosity also pushes me in other areas of my life. I practice a number of outdoor sports including mountain biking, bicycle tourism, Ultimate frisbee, hiking and trail running, and have travelled extensively across Europe and North America. It is perhaps for this reason that I have shown an ability to adapt quickly to new technologies and challenges with little outside help. Having said this, collaborative work within a team is something that I highly value and, indeed, am actively looking for.</p>

<p>Feel free to contact me for more details.</p>`,
    
    PROJECT_BIO2RDF: 'Converting Biological dataset to RDF format and accessing those data.',
    PROJECT_BIOPORTAL: 'Services to store, explore and use ontologies for text annotation (french and agronomical ontologies).',
    PROJECT_YAMPP: 'Tool to align ontologies, with a web UI to curate generated mappings.',
    PROJECT_D2S: 'Framework to generate services out of structured data using semantically meaningful data model.',
    
    
    WORK_EXPE_TITLE: 'Work experience',
    
    SIX_EXPE_TITLE: "Data Science developer",
    SIX_EXPE_COMPANY: "July 2018 - now in the Institute of Data Science at Maastricht University",
    SIX_EXPE_TXT: `
<ul>
  <li>Development of <a href="https://github.com/MaastrichtU-IDS/data2services-pipeline">data2services</a>, a framework to generate services out of structured data using semantically meaningful data model (Docker, Java)</li>
  <li>Conversion of structured data, such as DrugBank and HGNC, to the <a href="https://biolink.github.io/biolink-model/">BioLink</a> model; a semantically relevant RDF model for bioentities associations (<a href="http://graphdb.dumontierlab.com/">SPARQL</a>)</li>
  <li>Published <i><a href="https://ndownloader.figshare.com/files/13573628">Data2Services: enabling automated conversion of data to services</a></i> at <a href="http://www.swat4ls.org/">SWAT4LS</a></li>
  <li>Built RDF knowledge graphs to perform graph embeddings</li>
</ul>`,
    
    FIVE_EXPE_TITLE: "Conversational design engineer",
    FIVE_EXPE_COMPANY: "October 2017 - June 2018 at <i>Match Group</i> in Paris",
    FIVE_EXPE_TXT: `
<ul>
  <li>Involved in the development of a Natural Language Understanding (NLU) tool to build chatbots</li>
  <li>Designed conversational patterns using <a href="https://dialogflow.com/">DialogFlow</a> framework</li>
  <li>Analyzed conversations flow using tools like <a href="https://analytics.google.com/analytics/web/">Google Analytics</a></li>
  <li>Managed the multilingual aspect and translations in 6 languages of the developed NLU tool</li>
</ul>`,
    
    FIRST_EXPE_TITLE: "Semantic Web design engineer",
    FIRST_EXPE_COMPANY: "January 2015 - July 2017 at <i>LIRMM</i> (Laboratory for informatics, robotics and microelectronics of Montpellier)",
    FIRST_EXPE_TXT: `
<ul>
  <li>Administration of <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> and <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a> platforms, used for ontology storage, exploration and text annotation</li>
  <li>New features development for <a href='https://github.com/sifrproject' target='_blank'>BioPortal services</a> (Ruby on Rails, Java, SPARQL, Redis, d3js) : ontologies metadata, mappings, text annotation</li>
  <li>Kept compatibility with main version of the <a href='http://bioportal.bioontology.org' target='_blank'>NCBO BioPortal</a> (tests). Fixing problems pointed out by users and error in ontologies.</li>
  <li>Packaged, integrated and documented Natural Language Processing programs for the <a href='https://gite.lirmm.fr/advanse' target='_blank'>ADVANSE</a> team, available at <a href='https://advanse.lirmm.fr' target='_blank'>advanse.lirmm.fr</a> (Java, AngularJS, Linux)</li>
  <li>Enhanced and packaged the <a href='https://gite.lirmm.fr/opendata' target='_blank'>YAM++ ontologies matching tool</a> (Java)</li>
  <li>Developed a <a href='http://yamplusplus.lirmm.fr/' target='_blank'>web interface</a> for ontologies mappings validation (JEE)</li>
</ul>`,
    
    TWO_EXPE_TITLE: "Java/Talend study engineer",
    TWO_EXPE_COMPANY: "9 months in 2013 and 2014 at <i>CHU de Québec</i> research center",
    TWO_EXPE_TXT: `
<ul>
  <li>Participation to the <a href='http://bio2rdf.org/' target='_blank'>Bio2RDF</a> project administration and development.</li>
  <li>Set up and use of a Hadoop data platform on a cluster of CentOS servers.</li>
  <li>Develop web <a href='https://github.com/bio2rdf/bio2rdf-rest' target="_blank">RESTful services</a> that consume RDF data using Talend ETL.</li>
  <li>Develop <a href='https://github.com/vemonet/talend4sw' target='_blank'>Talend ETL components</a> for the semantic web using Java.</li>
  <li>Develop Java programs that convert public biological databases to RDF format (PubMed, neXtProt).</li>
</ul>
Publication : <a href='http://ceur-ws.org/Vol-1272/paper_121.pdf' target='_blank'>Bio2RDF Release 3: A Larger Connected Network of Linked Data for the Life Sciences</a>`,
    
    THREE_EXPE_TITLE: "Research assistant in bioinformatics",
    THREE_EXPE_COMPANY: "3 months during 2012 in <a href='https://nature.berkeley.edu/almeidalab/' target='_blank'>Almeida lab</a> at <i>University of California Berkeley</i>",
    THREE_EXPE_TXT: `
<ul>
  <li>Development of informatics tools to help DNA analysis to understand the evolution of the <i>Xyllela fastidiosa</i> bacteria, using Python 2.7.</i>
  <li>Installation of an Amazon Machine Image based on Linux (for Amazon Web Services)</li>
</ul>`,
    
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
    
    TWO_EDU_TITLE: "Bachelor's degree in physiological and computer engineering",
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
</ul>`,
    
    
    SKILLS_TOOL_TITLE: "Tools",
    SKILLS_LANG_TITLE: "Languages",
    SKILLS_DATA_TITLE: "Data management",
    SKILLS_SPEAK_TITLE: "Langages spoken",
    
    PUBLICATIONS_TEXT:""
    
  });
  
  // Dictionary for french
  $translateProvider.translations('fr', {
    PROJECTS_TITLE: "Projets",
    SKILLS_TITLE: "Competences",
    
    DDL_CV_LABEL: 'CV',
    DDL_CV_FILE: 'resources/CV_VincentEmonet.pdf',
    
    ABOUT_TEXT: `<p><i>J'aime RDF, SPARQL, and faire du vélo. J'aime la diversité, mais aussi les standards.</i></p>

Je travaillais précédemment en tant qu'ingénieur d'étude au LIRMM (Laboratoire d'informatique, de Robotique, de Microélectronique de Montpellier) sur plusieurs projets liés au web sémantique : 
<ul>
  <li>AgroPortal et BioPortal : deux portails d'ontologies permettant d'exploiter les ontologies stockées et d'annoter des données.</li>
  <li>Yam++ : un outil web permettant de découvrir des mappings entre ontologies.</li>
</ul>
<p>Ces projets m'ont permis de renforcer mes compétences en développement (Java, Web, Ruby, Shell) et dans le domaine des ontologies. Ainsi que de découvrir le Natural Language Processing.</p>

<p>J'ai continué à travailler sur des problématiques liées à la compréhension du langage naturel en rejoignant l'équipe R&D de Meetic pour travailler sur le développement d'un chatbot. Avant d'intégrer l'Institute of Data Science à Maastricht University pour développer un pipeline afin de convertir des données structurées au format RDF.</p>

<p>Mais c'est après l'obtention de mon Master en bioinformatique que j'ai découvert le domaine du traitement de données et du web sémantique, lié à la recherche en biologie. Le projet Bio2RDF (conversion de base de données biologique au format RDF) au Québec, m'a permis d'en apprendre beaucoup sur la gestion et le traitement de données par l'utilisation d'ETL et de Java (développement de composants Talend). Tout en me familiarisant avec les modèles de données liées (Linked Data) et le Big Data. Avant de travailler pour le LIRMM.</p>

<p>La découverte de nouveaux domaines est une grande source de motivation. Cette curiosité me pousse également dans d'autres domaines. Je pratique différents sports extérieurs tel que le VTT, le cyclo-tourisme, l'Ultimate frisbee, la randonnée ou le trail et ai voyagé à différents endroits en Europe et Amérique du Nord. C'est pourquoi j'ai su rapidement m'adapter à des situations et des technologies qui m'étaient inconnues avec peu d'aide extérieur. Mais étant assez social, je porte beaucoup d'importance au travail d'équipe.</p>

<p>N'hésitez pas à me contacter pour plus de détails.</p>`,
    
    PROJECT_BIO2RDF: 'Conversion de bases de données biologiques au format RDF et accès à ces données.',
    PROJECT_BIOPORTAL: "Services permettant de stocker des ontologies, les explorer et les utiliser pour annotater du texte (ontologies françaises et du domaine de l'agronomie).",
    PROJECT_YAMPP: 'Outils pour aligner des ontologies avec interface web pour valider les mappings générés.',
    PROJECT_D2S: 'Framework permettant de générer automatiquement des services à partir de données structurées.',
    
    
    WORK_EXPE_TITLE: 'Expérience professionnelle',
      
    SIX_EXPE_TITLE: "Développeur en science des données",
    SIX_EXPE_COMPANY: "Juillet 2018 - aujourd'hui au <i>Data Science institute</i> à Maastricht University",
    SIX_EXPE_TXT: `
<ul>
  <li>Développement de data2services, un framework permettant de générer automatiquement des services à partir de données structurées (Docker, Java)</li>
  <li>Conversion de base de données, tel que DrugBank ou HGNC, au format RDF suivant le modèle de données <a href="https://biolink.github.io/biolink-model/">BioLink</a>, pour les associations entre entités biologiques (<a href="http://graphdb.dumontierlab.com/">SPARQL</a>)</li>
  <li>Publication de <i><a href="https://ndownloader.figshare.com/files/13573628">Data2Services: enabling automated conversion of data to services</a></i> à <a href="http://www.swat4ls.org/">SWAT4LS</a></li>
  <li>Développement de graphs RDF pour appliquer des algorithmes de graph embeddings</li>
</ul>`,
    
    FIVE_EXPE_TITLE: "Ingénieur design conversationnel",
    FIVE_EXPE_COMPANY: "Octobre 2017 - Juin 2018 chez <i>Meetic</i> à Paris",
    FIVE_EXPE_TXT: `
<ul>
  <li>Participation au développement d'un outil de compréhension du langage naturel pour construire un chatbot</li>
  <li>Mise en place de flux conversationnel en utilisant le framework <a href="https://dialogflow.com/">DialogFlow</a></li>
  <li>Analyse de conversations en utilisant <a href="https://analytics.google.com/analytics/web/">Google Analytics</a></li>
  <li>Gestion de la traduction en 6 langages et de l'aspect multilingue de l'outil développé</li>
</ul>`,
      
    FIRST_EXPE_TITLE: "Ingénieur d'étude Web sémantique",
    FIRST_EXPE_COMPANY: "Janvier 2015 - Juillet 2017 au <i>LIRMM</i>, Laboratoire d'informatique, de robotique et de microélectronique de Montpellier",
    FIRST_EXPE_TXT: `
<ul>
  <li>Administration et développement des plateformes de stockage et d'exploitation d'ontologies <a href='http://bioportal.lirmm.fr' target='_blank'>SIFR BioPortal</a> et <a href='http://agroportal.lirmm.fr' target='_blank'>IBC AgroPortal</a></li>
  <li>Implémentations de nouvelles fonctionnalités aux <a href='https://github.com/sifrproject' target='_blank'>services BioPortal</a> (Ruby on Rails, Java, SPARQL, Redis, d3js) : ontologies metadata, mappings, annotation de texte</li>
  <li>Gestion de la compatibilité avec la version principale du <a href='http://bioportal.bioontology.org' target='_blank'>NCBO BioPortal</a> (tests). Correction de problèmes remontés par les utilisateurs et d'ontologies d'erronées.</li>
  <li>Intégration, consolidation et documentation de programmes de fouilles de données et de traitement du langage naturel pour l'équipe <a href='https://gite.lirmm.fr/advanse' target='_blank'>ADVANSE</a>, accessible à <a href='https://advanse.lirmm.fr' target='_blank'>advanse.lirmm.fr</a> (Java, AngularJS, Linux)</li>
  <li>Amélioration de l’outil de matching d’ontologies <a href='https://gite.lirmm.fr/opendata' target='_blank'>YAM++</a> (Java)</li>
  <li>Développement d’une <a href='http://yamplusplus.lirmm.fr/' target='_blank'>interface web</a> pour la validation de mappings entre ontologies (JEE)</li>
</ul>`,
    
    TWO_EXPE_TITLE: "Ingénieur d'étude Java/Talend en BioInformatique",
    TWO_EXPE_COMPANY: "9 mois entre 2013 et 2014 au Centre de recherche du <i>CHU de Québec</i>",
    TWO_EXPE_TXT: `
<ul>
  <li>Participation à l'administration et au développement du projet <a href='http://bio2rdf.org/' target='_blank'>Bio2RDF</a></li>
  <li>Développement de <a href='https://github.com/bio2rdf/bio2rdf-rest' target="_blank">services web RESTful</a> pour accéder aux données biologiques converties au format RDF.</li>
  <li>Développement de <a href='https://github.com/vemonet/talend4sw' target='_blank'>composants d’ETL Talend</a> en Java pour le web sémantique.</li>
  <li>Conversion de bases de données biologiques au format RDF (PubMed, neXtProt) avec Java et l'ETL Talend.</li>
  <li>Mise en place d’une plateforme Hadoop pour le Big Data sur des serveurs CentOS</li>
</ul>
Publication : <a href='http://ceur-ws.org/Vol-1272/paper_121.pdf' target='_blank'>Bio2RDF Release 3: A Larger Connected Network of Linked Data for the Life Sciences</a>`,
    
    THREE_EXPE_TITLE: "Assistant de recherche en BioInformatique",
    THREE_EXPE_COMPANY: "3 mois en 2012 à <a href='https://nature.berkeley.edu/almeidalab/' target='_blank'>Almeida lab</a> à <i>University of California Berkeley</i>",
    THREE_EXPE_TXT: `
<ul>
  <li>Création de programmes d'analyses de séquences ADN dans le cadre de l'analyse de l'évolution de la bactérie <i>Xyllela fastidiosa</i>, en utilisant Python 2.7.</i>
  <li>Péparation d'une Amazon Machine Image basé sur Linux (afin de pouvoir utiliser ensuite le service Cloud Amazon Web Service)</li>
</ul>`,
    
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
</ul>`,
    
    
    SKILLS_TOOL_TITLE: "Outils",
    SKILLS_LANG_TITLE: "Langages",
    SKILLS_DATA_TITLE: "Gestion de données",
    SKILLS_SPEAK_TITLE: "Langues parlées",
    
    PUBLICATIONS_TEXT:""
    
  });
  
  
  
  $translateProvider.preferredLanguage('en');
});


app.controller('TranslateCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
    // Change opacity of flags when selected and change CV link
    if (key === "fr") {
      $("#frFlag").css("opacity", "1");
      $("#enFlag").css("opacity", "0.5");
      $("#cvHrefLabel").attr("href", "resources/CV_VincentEmonet.pdf")
      $("#cvHrefBtn").attr("href", "resources/CV_VincentEmonet.pdf")
    } else {
      $("#frFlag").css("opacity", "0.5");
      $("#enFlag").css("opacity", "1");
      $("#cvHrefLabel").attr("href", "resources/RESUME_VincentEmonet.pdf")
      $("#cvHrefBtn").attr("href", "resources/RESUME_VincentEmonet.pdf")
    }
  };
});

// To highlight select nav btn. Take the URL (after /, not taking what after #)
app.controller('HeaderController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});

/**
 * For nice tooltip display when mouseover publications
 */
jQuery(document).ready(function() {
  "use strict";

  $('.tooltipster').tooltipster({
    interactive: true,
    position: "top",
    contentAsHTML: true,
    animation: 'fade',
    delay: 300,
    theme: 'tooltipster-light',
    trigger: 'hover'
  });
});
