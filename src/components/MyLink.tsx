import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link, Box, Typography } from "@mui/material";

import Markdown from 'markdown-to-jsx';

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      // Not picked up, mui theme system is quite unconsistent...
      textDecoration: 'none',
    },
  },
}))

export default function MyLink({ children, href }: any) {
  // const theme = useTheme();
  const classes = useStyles();

  return(
    <a href={href} target='_blank' className={classes.link}>
      {children}
    </a>
  )
}

