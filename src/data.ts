export const projects = [
  {
    title: '💠 Shapes of You',
    langs: ['python', 'typescript'],
    description: `Web service indexing standard knowledge representations, such as OWL ontologies, or
  SHACL shapes, from public git repositories, alongside with generating metadata for active SPARQL endpoints.`,
    website_url: 'http://index.semanticscience.org',
    git_url: 'https://github.com/vemonet/shapes-of-you',
  },
  {
    title: '♻️ FAIR enough',
    langs: ['python', 'typescript'],
    description: `An ecosystem with a python library and a web service to define, publish, and execute extensible evaluations
    of resources online, in order to assess their compliance to the FAIR principles (Findable Accessible Interoperable Reusable).`,
    website_url: 'https://fair-enough.semanticscience.org',
    docs_url: 'https://maastrichtu-ids.github.io/fair-test',
    git_url: 'https://github.com/MaastrichtU-IDS/fair-enough',
    pip_url: 'https://pypi.org/project/fair-test',
  },
  {
    title: '✨ RDFLib endpoint',
    langs: ['python'],
    description: `A python library to deploy SPARQL endpoints from RDFLib Graphs to serve RDF files, or expose machine learning models, and any other logic implemented in Python, through SPARQL functions.`,
    git_url: 'https://github.com/vemonet/rdflib-endpoint',
    pip_url: 'https://pypi.org/project/rdflib-endpoint',
  },
  {
    title: '🔬 Knowledge Collaboratory',
    langs: ['python', 'typescript'],
    description: `An ecosystem to publish and retrieve scientific claims as Nanopublications using Translator standards, such as the BioLink model and the Translator Reasoner API.`,
    website_url: 'https://collaboratory.semanticscience.org',
    git_url: 'https://github.com/MaastrichtU-IDS/knowledge-collaboratory',
  },
  {
    title: '🔮 Translator OpenPredict',
    langs: ['python'],
    description: `An API to serve drug-disease predictions models, and expose the predictions using standards developed
    for the NIH NCATS Biomedical Data Translator project.`,
    website_url: 'https://openpredict.semanticscience.org',
    git_url: 'https://github.com/MaastrichtU-IDS/translator-openpredict',
  },
  {
    title: '🔭 Data Science Research Infrastructure',
    langs: ['docker', 'kubernetes'],
    description: `A Kubernetes/OpenShift cluster for academic researchers to deploy Data Science workspaces and services,
    such as JupyterHub, RStudio, or VisualStudio Code server.`,
    // website_url: 'https://dsri.maastrichtuniversity.nl',
    docs_url: 'https://dsri.maastrichtuniversity.nl',
    git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
  },
  // {
  //   title: '🪐 JupyterLab',
  //   langs: ['docker', 'python'],
  //   description: `JupyterLab workspace with VisualStudio Code integrated, and various packages and kernels pre-installed to help working with data science and knowledge graphs.`,
  //   git_url: 'https://github.com/MaastrichtU-IDS/jupyterlab',
  // },
]

export const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'RDF',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'SPARQL',
    competency: 4,
    category: ['Semantic Web', "Databases"],
  },
  {
    title: 'Ontologies',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'SHACL',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'OpenAPI',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'RDFLib',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Material UI',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'HTML/CSS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'ShEx',
    competency: 3,
    category: ['Semantic Web'],
  },
  {
    title: 'RML',
    competency: 3,
    category: ['Semantic Web'],
  },
  {
    title: 'Protégé',
    competency: 3,
    category: ['Semantic Web', 'Tools'],
  },
  {
    title: 'Pydantic',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Talend ETL',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Node.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Express.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Next.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'AngularJS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Ruby on Rails',
    competency: 2,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'RDF4J',
    competency: 2,
    category: ['Semantic Web'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'OpenShift',
    competency: 2,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Gatsby',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'MacOS',
    competency: 1,
    category: ['System administration'],
  },
  {
    title: 'Rust',
    competency: 1,
    category: ['Languages'],
  },
]
// .map((skill) => ({ ...skill, category: skill.category.sort() }));


export const skillsCategories = [
  {
    title: 'Languages',
    color: 'languages',
    emoji: '💬',
  },
  {
    title: 'Web Development',
    color: 'webdev',
    emoji: '🌐',
  },
  {
    title: 'Semantic Web',
    color: 'semanticweb',
    emoji: '🔗',
  },
  {
    title: 'Data Engineering',
    color: 'dataengineering',
    emoji: '🔧',
  },
  // {
  //     title: 'Data Science',
  //     color: 'datascience',
  //     emoji: '📊',
  // },
  {
    title: 'Databases',
    color: 'databases',
    emoji: '🗄️',
  },
  {
    title: 'System administration',
    color: 'sysadmin',
    emoji: '🔌',
    // emoji: '🕹️',
  },
  {
    title: 'Tools',
    color: 'tools',
    emoji: '🔨',
  },
]