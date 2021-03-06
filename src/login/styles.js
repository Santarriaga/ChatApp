const styles = theme => ({

  fillWindow: {
      height: '100%',
      position: 'absolute',
      left: '0',
      width: '100%',
      overFlow: 'hidden',
      backgroundColor: '#223742'
  },

  main: {
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing() * 3,
      marginRight: theme.spacing() * 3,
      [theme.breakpoints.up(400 + theme.spacing() * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
  },
  paper: {
    marginTop: theme.spacing() * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing() * 2}px ${theme.spacing() * 3}px ${theme.spacing() * 3}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing() * 3,
  },
  noAccountHeader: {
    width: '100%',
    textAlign: 'center'
  },
  signUpLink: {
    width: '100%',
    textDecoration: 'none',
    color: '#303f9f',
    fontWeight: 'bolder',
    textAlign: 'center'
  },
  errorText: {
    color: 'red',
    textAlign: 'center'
  }
});

export default styles;
