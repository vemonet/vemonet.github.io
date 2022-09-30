export const projects = [
    {
      title: '💠 Shapes of You',
      langs: ['python', 'typescript'],
      description: `An index for publicly available semantic resources (ontologies, vocabularies, shapes, queries, mappings) indexed from public Git platforms (GitHub, GitLab, Gitee)`,
      website_url: 'http://index.semanticscience.org',
      git_url: 'https://github.com/vemonet/shapes-of-you',
    },
    {
      title: '♻️ FAIR enough & FAIR test',
      langs: ['python', 'typescript'],
      description: `A python library and a web service where anyone can run evaluations to assess how compliant to the FAIR principles is a resource, given the resource identifier (URI/URL).`,
      website_url: 'https://fair-enough.semanticscience.org',
      docs_url: 'https://maastrichtu-ids.github.io/fair-test',
      git_url: 'https://github.com/MaastrichtU-IDS/fair-enough',
    },
    {
      title: '✨ RDFLib endpoint',
      langs: ['python'],
      description: `A python library to easily serve RDFLib graphs as SPARQL endpoints, and enable to implement and use custom SPARQL functions in python.`,
      git_url: 'https://github.com/vemonet/rdflib-endpoint',
    },
    {
      title: '🔬 Knowledge Collaboratory',
      langs: ['python', 'typescript'],
      description: `An ecosystem to publish and retrieve scientific claims as Nanopublications using Translator standards, such as the BioLink model and the Translator Reasoner API.`,
      website_url: 'https://collaboratory.semanticscience.org',
      git_url: 'https://github.com/MaastrichtU-IDS/knowledge-collaboratory',
    },
    {
      title: '🔭 Data Science Research Infrastructure',
      langs: ['docker', 'kubernetes'],
      description: `A Kubernetes/OpenShift cluster for academic researchers to deploy Data Science workspaces and services.`,
      // website_url: 'https://dsri.maastrichtuniversity.nl',
      docs_url: 'https://dsri.maastrichtuniversity.nl',
      git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
    },
    {
      title: '🪐 JupyterLab',
      langs: ['docker', 'python'],
      description: `JupyterLab workspace with VisualStudio Code integrated, and various packages and kernels pre-installed to help working with data science and knowledge graphs.`,
      git_url: 'https://github.com/MaastrichtU-IDS/jupyterlab',
    },
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
        title: 'TypeScript',
        competency: 3,
        category: ['Languages', 'Web Development'],
    },
    {
        title: 'React',
        competency: 3,
        category: ['Web Development'],
    },
    {
        title: 'HTML/CSS',
        competency: 3,
        category: ['Web Development'],
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
        title: 'Node.JS',
        competency: 2,
        category: ['Web Development'],
    },
    {
        title: 'ExpressJS',
        competency: 2,
        category: ['Web Development'],
    },
    {
        title: 'NextJS',
        competency: 2,
        category: ['Web Development'],
    },
    {
        title: 'Angular',
        competency: 2,
        category: ['Web Development'],
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
        competency: 1,
        category: ['Web Development'],
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
        emoji: '🕸️',
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
    {
        title: 'Data Science',
        color: 'datascience',
        emoji: '📊',
    },
    {
        title: 'Databases',
        color: 'databases',
        emoji: '🗄️',
    },
    {
        title: 'System administration',
        color: 'sysadmin',
        emoji: '🔌',
    },
    {
        title: 'Tools',
        color: 'tools',
        emoji: '🔨',
    },
]