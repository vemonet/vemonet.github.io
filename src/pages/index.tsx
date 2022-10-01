import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled, useTheme, Theme } from '@mui/material/styles';
import { Container, Box, Typography, Grid, Icon, Stack, Tooltip, IconButton, CardActions, CardContent, CardHeader, Card, Link, Button } from "@mui/material";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoToWebsiteIcon from '@mui/icons-material/OpenInBrowser';
import DocsIcon from '@mui/icons-material/MenuBook';
import PDFIcon from '@mui/icons-material/PictureAsPdf';
// @ts-ignore
import OrcidIcon from '../images/orcid_logo.svg';
// @ts-ignore
import GoogleScholarIcon from '../images/google_scholar_logo.svg';
// @ts-ignore
import HalIcon from '../images/hal_logo.png';
// @ts-ignore
import DblpIcon from '../images/dblp_logo.png';
// import SolidIcon from '../images/solid_logo.svg';

import CodeChip from '../components/CodeChip';
import { projects, skills, skillsCategories } from '../components/data';
import Seo from '../components/layout/seo';
import LinkOut from "../components/LinkOut";
// import MyMarkdown from "../components/MyMarkdown";
// import { FC } from '../util/types';


// const IndexPage: FC = () => {
export default function IndexPage() {
  const theme = useTheme();

  const [state, setState] = React.useState({
    filterSkills: 'all',
    dialogOpen: false,
    project_license: '',
    language_autocomplete: [],
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  // Styled components
  const Paragraph = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    marginBottom: theme.spacing(1),
    textAlign: 'justify',
  }))as typeof Typography;

  const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h5,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    fontWeight: '300',
  })) as typeof Typography;


  return(
    <Container className='mainContainer'>
      <Seo title="Home" />
      {/* <Title>
        Online presence
      </Title> */}

      {/* <Paragraph style={{marginBottom: theme.spacing(3), textAlign: 'center'}}>
        Knowledge graph developer working with Semantic Web standards (RDF, SPARQL, OWL ontologies, SHACL, RML), life sciences data, and web technologies.
      </Paragraph> */}

      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        {/* <Stack sx={{ flexDirection: { xs: "column", md: "row"} }} spacing={2} alignItems="center" justifyContent="center"> */}
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <Tooltip title='Vincent Emonet Curriculum Vitæ'>
            <Button href="/cv_vincent_emonet.pdf" target="_blank"
              component={Link} variant="contained" color="error"
              startIcon={<PDFIcon />}
            >
              CV
            </Button>
          </Tooltip>
          <Tooltip title='GitHub profile'>
            <Button href="https://github.com/vemonet" target="_blank"
              component={Link} variant="contained" color="warning"
              startIcon={<GitHubIcon />}
            >
              vemonet
            </Button>
          </Tooltip>
          <Tooltip title='LinkedIn profile'>
            <Button href="https://www.linkedin.com/in/vincent-emonet" target="_blank"
              component={Link} variant="contained" color="info"
              startIcon={<LinkedInIcon />}
            >
              vincent-emonet
            </Button>
          </Tooltip>
          <Tooltip title='ORCID profile'>
            <Button href="https://orcid.org/0000-0002-1501-1082" target="_blank"
              component={Link} variant="contained" color="success"
              startIcon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
                <img src={OrcidIcon} />
              </Icon>}
            >
              0000-0002-1501-1082
            </Button>
          </Tooltip>
          {/* <Tooltip title='SOLID pod'>
            <Button href="https://vemonet.solidcommunity.net/profile/#me" target="_blank"
              // @ts-ignore
              component={Link} variant="contained" color="purple"
              startIcon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
                <img src={SolidIcon} />
              </Icon>}
            >
              Solid pod
            </Button>
          </Tooltip> */}
        </Stack>
      </Card>

      <Paragraph style={{marginTop: theme.spacing(3), textAlign: 'center'}}>
        Knowledge graph developer working with Semantic Web standards (RDF, SPARQL, OWL ontologies, SHACL, RML), life sciences data, and web technologies.
      </Paragraph>


      <Title>
        Publications
      </Title>

      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <Tooltip title='Publications on Google Scholar'>
            <Button href="https://scholar.google.fr/citations?user=G59f3woAAAAJ" target="_blank"
              component={Link} variant="contained" color="warning"
              startIcon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
                <img src={GoogleScholarIcon} />
              </Icon>}
            >
              Google Scholar
            </Button>
          </Tooltip>
          <Tooltip title='Publications on HAL'>
            <Button href="https://hal.archives-ouvertes.fr/search/index/q/*/authFullName_s/Vincent+Emonet" target="_blank"
              // @ts-ignore
              component={Link} variant="contained" color="purple"
              startIcon={<Icon style={{display: 'flex'}}>
                <img src={HalIcon} />
              </Icon>}
            >
              HAL
            </Button>
          </Tooltip>
          <Tooltip title='Publications on dblp'>
            <Button href="http://dblp.uni-trier.de/pers/hd/e/Emonet:Vincent" target="_blank"
            // @ts-ignore
              component={Link} variant="contained" color="yellow"
              startIcon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
                <img src={DblpIcon} />
              </Icon>}
            >
              dblp
            </Button>
          </Tooltip>
        </Stack>
      </Card>


      <Title id='projects'>
        Latest projects
      </Title>

      <Grid container spacing={2} alignItems="stretch">
        { projects.map((project: any, key: number) => (
          <Grid item xs={12} md={4}>
            <Card style={{display: 'inline-block', textAlign: 'left', height: '100%'}}>
              <CardHeader
                // avatar={<GitHubIcon />}
                title={project.title}
                titleTypographyProps={{variant: 'h6' }}
                // titleTypographyProps={{variant: 'subtitle1', style: {fontSize: '1.1rem'} }}
                subheader={<>
                  { project.langs.map((lang: any, key: number) => (
                    <CodeChip lang={lang} key={key}/>
                  ))}
                </>}
                style={{paddingBottom: '0px', textAlign: 'center'}}
              />
              <CardContent style={{paddingBottom: '0px', paddingTop: theme.spacing(1)}}>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{display: 'block', paddingTop: '0px', textAlign: 'center'}}>
                { project.website_url &&
                  <Tooltip title='Go to the website'>
                    <a href={project.website_url} target='_blank'>
                      <IconButton aria-label="share">
                        <GoToWebsiteIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.docs_url &&
                  <Tooltip title='Documentation'>
                    <a href={project.docs_url} target='_blank'>
                      <IconButton aria-label="share">
                        <DocsIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.git_url &&
                  <Tooltip title='Source code on GitHub'>
                    <a href={project.git_url} target='_blank'>
                      <IconButton aria-label="GitHub link">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Title>
        About me
      </Title>

      <Paragraph>
        The aim of my work is to build data ecosystems that will enable scientific researchers
        to make new discoveries. Recently I developed the <LinkOut href="https://maastrichtu-ids.github.io/dsri-documentation">Data Science Research Infrastructure</LinkOut>,
        an OpenShift cluster for academic researchers, and <LinkOut href="http://d2s.semanticscience.org">Data2Services</LinkOut>,
        a framework to generate services from structured data using a semantically meaningful data model.
        I also built a RDF knowledge graph that integrates data from biomedical and clinical data sources,
        was involved in the Knowledge Graph Standardization effort of the <LinkOut href="https://ncats.nih.gov/translator">NIH NCATS Translator project</LinkOut>,
        and contributed to advancing the <LinkOut href="https://biolink.github.io/biolink-model/docs/">BioLink model</LinkOut>.
        All these activities have been aimed at building an infrastructure for computationally-assisted exploration of knowledge and innovative research hypotheses.
      </Paragraph>

      <Paragraph>
        I first realized the data access challenges faced by researchers and medical practitioners while I worked on the <LinkOut href="http://bio2rdf.org/">Bio2RDF project</LinkOut> at Quebec University. I have since dedicated my work to building biomedical and clinical data resources and ensuring users' access to them. I am a strong advocate of Open Source and commit myself to write comprehensible documentation and build easily accessible and reusable software. In my activities, I emphasize improving existing standards to address data interoperability and reproducibility and empowering researchers to improve their scientific practice.
      </Paragraph>

      {/* <Paragraph>
        The aim of my work is to build data ecosystems that will enable scientific researchers
        to make new discoveries. As a data science developer at the Institute of Data Science
        at Maastricht University, I developed the <LinkOut href="https://maastrichtu-ids.github.io/dsri-documentation/">Data Science Research Infrastructure</LinkOut>,
        an OpenShift cluster for academic researchers, and <LinkOut href="http://d2s.semanticscience.org/">Data2Services</LinkOut>,
        a framework to generate services from structured data using a semantically meaningful data model.
        I also built a RDF knowledge graph that integrates data from biomedical and clinical data sources,
        was involved in the Knowledge Graph Standardization effort of the <LinkOut href="https://ncats.nih.gov/translator">NIH NCATS Translator project</LinkOut>,
        and contributed to advancing the <LinkOut href="https://biolink.github.io/biolink-model/docs/">BioLink model</LinkOut>.
        All these activities have been aimed at building an infrastructure for computationally-assisted exploration of knowledge and innovative research hypotheses.
      </Paragraph>
      <Paragraph>
        I first realized the data access challenges faced by researchers and medical practitioners while I worked on the <LinkOut href="http://bio2rdf.org/">Bio2RDF project</LinkOut> at Quebec University as part of a Master’s in Bioinformatics. I have since dedicated my career to building biomedical and clinical data resources and ensuring users' access to them. I am a strong advocate of Open Source and commit myself to write comprehensible documentation and build easily accessible and reusable software. In my activities, I emphasize improving existing standards to address data interoperability and reproducibility and empowering researchers to improve their scientific practice.
        Before taking my current position at the Institute of Data Science at UM, I worked as a research engineer at the LIRMM in Montpellier on projects to make the semantic web and ontologies more accessible to researchers, such as AgroPortal a portal for agronomical ontologies.
      </Paragraph>
      <Paragraph>
        Making new discoveries acts a great source of motivation for me. This curiosity also pushes me in other areas of my life. I practice a number of outdoor sports including mountain biking, bicycle tourism, Ultimate frisbee, hiking and trail running, and have travelled extensively across Europe and North America. It is perhaps for this reason that I have shown an ability to adapt quickly to new technologies and challenges with little outside help. Having said this, collaborative work within a team is something that I highly value and, indeed, am actively looking for.
      </Paragraph>
      <Paragraph>Feel free to contact me for more details.</Paragraph> */}


      <Title>
        Skills
      </Title>

      <Paragraph style={{textAlign: 'center'}}>
        The displayed scores are obviously subjective, please refer to my <LinkOut href="/cv_vincent_emonet.pdf">CV</LinkOut> for a better account of how those skills were used.
      </Paragraph>

      <Button variant="text" color="inherit" onClick={() => { updateState({ filterSkills: 'all'}) }} style={{textTransform: 'none'}}>
        💥 All
      </Button>
      { skillsCategories.map((cat: any, key: number) => (
        <Button variant="text" color={cat.color} style={{textTransform: 'none'}}
        onClick={() => { updateState({ filterSkills: cat.title}) }}>
          {cat.emoji} {cat.title}
        </Button>
      ))}

      <Grid container spacing={2} alignItems="stretch" style={{marginTop: theme.spacing(1)}}>
        { skills.map((skill: any, key: number) => {
          const cat: any = skillsCategories.filter(obj => { return obj.title === skill.category[0]; })[0]
          return (<>
            { (state.filterSkills == 'all' || skill.category.includes(state.filterSkills)) &&
            <Grid item xs={12} md={4}>
              <Card style={{textAlign: 'left', height: '100%', padding: theme.spacing(2)}}>
                <CardContent style={{padding: '0px'}}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* ##ch is the size of the largest skill name */}
                    <Typography variant="body2" style={{width: '20ch'}}>
                      {skill.title}
                    </Typography>
                    <Box sx={{ width: '100%', mr: 1 }}>
                    {/* cat = skillsCategories.filter(obj => { return obj.title === skill.categories[0]; }); */}
                      <LinearProgress variant="determinate" value={skill.competency*20}
                      color={cat.color} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="text.secondary">{skill.competency}/5</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          }
        </>)}
        )}
      </Grid>

      {/* <MyMarkdown>
       Trying markdown!
      </MyMarkdown> */}

      <Title>
        Contact me
      </Title>

      <Paragraph style={{textAlign: 'center'}}>
        vincent.emonet@gmail.com
      </Paragraph>

    </Container>
  )
}