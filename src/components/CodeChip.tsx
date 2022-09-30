import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Chip, Icon, Typography } from "@mui/material";

// @ts-ignore
import PythonIcon from '../images/python_logo.svg';
// @ts-ignore
import TypeScriptIcon from '../images/typescript_logo.svg';
// @ts-ignore
import KubernetesIcon from '../images/kubernetes_logo.svg';
// @ts-ignore
import DockerIcon from '../images/docker_logo.png';
// @ts-ignore
import JavaIcon from '../images/java_logo.png';


export default function CodeChip({ lang }: any) {
  const theme = useTheme();

  // const useStyles = makeStyles(() => ({
  //   link: {
  //     textDecoration: 'none',
  //     color: theme.palette.primary.main,
  //     '&:hover': {
  //       color: theme.palette.secondary.main,
  //       textDecoration: 'none',
  //     },
  //   },
  //   input: {
  //     background: 'white',
  //     fontSize: '11px',
  //     fontFamily: 'monospace'
  //   },
  //   settingsForm: {
  //     width: '100%',
  //     // textAlign: 'center',
  //     '& .MuiFormControl-root': {
  //       marginTop: theme.spacing(1),
  //       marginBottom: theme.spacing(1),
  //     },
  //     '& .MuiFormHelperText-root': {
  //       marginTop: theme.spacing(0),
  //       marginBottom: theme.spacing(1),
  //     },
  //   },
  //   saveButton: {
  //     textTransform: 'none',
  //     margin: theme.spacing(2, 2),
  //   },
  //   fullWidth: {
  //     width: '100%',
  //   },
  // }))
  // const classes = useStyles();

  const codeMap: any = {
    python: {
      label: "Python",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={PythonIcon} />
            </Icon>,
      color: "success",
    },
    typescript: {
      label: "TypeScript",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={TypeScriptIcon} />
            </Icon>,
      color: "success",
    },
    docker: {
      label: "Docker",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={DockerIcon} />
            </Icon>,
      color: "success",
    },
    kubernetes: {
      label: "Kubernetes",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={KubernetesIcon} />
            </Icon>,
      color: "success",
    },
    java: {
      label: "Java",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={JavaIcon} />
            </Icon>,
      color: "success",
    },
  }

  const MyChip = styled(Chip)(({ theme }) => ({
    // ...theme.typography.h5,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    // marginBottom: theme.spacing(2),
  }));


  return(
    <MyChip
      icon={codeMap[lang.toLowerCase()].icon}
      label={codeMap[lang.toLowerCase()].label}
      variant="outlined"
      size="small"
      // color={codeMap[lang].color}
      // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
    />
  )
}

