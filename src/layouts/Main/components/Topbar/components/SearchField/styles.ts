import { Styles } from 'react-jss';
import global from '../../../../../../theme/global';

export default {
  container: {
    position: 'relative',
    opacity: 1,
  },
  containerOpen: {
    ...global.dropdown(),
    backgroundColor: 'white',
    position: 'absolute',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 10,
  },
  suggestion: {
    padding: '8px 12px',
    '&:not(:last-child)': {
      borderBottom: '1px dotted rgba(10, 10, 10, 0.3)',
    },
  },
} as Styles;
