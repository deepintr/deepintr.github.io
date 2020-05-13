import { Styles } from 'react-jss';

const styles: Styles = {
  '@global': {
    '#tsparticles': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -10,
    },
  },
  content: {
    minHeight: '100vh',
    paddingTop: '1.5rem',
  },
};

export default styles;
