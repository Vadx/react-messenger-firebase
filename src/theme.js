import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F1F9FF'
    },
    primary: {
      main: '#205E8B',
      contrastText: '#fff'
    },
    secondary: {
      main: '#BBDEE8',
      contrastText: '#fff'
    },
    text: {
      primary: '#333'
    },
    action: {
      active: '#205E8B'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      }
    },
    MuiTextField: {
      root: {
        // background: '#F1F9FF'
      }
    },
    MuiSelect: {
      root: {
        background: '#F1F9FF'
      }
    },
    MuiSvgIcon: {
      root: {
        fill: '#4094C9'
      }
    }
  },
  typography: {
    fontSize: 15
  }
})
