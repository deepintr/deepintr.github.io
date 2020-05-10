import { Styles } from 'react-jss';

export default {
  container: {
    position: 'relative',
  },
  containerOpen: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .05)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 2,
  },
  suggestion: {
    padding: '8px 12px',
  },
} as Styles;
