import { Styles } from 'react-jss';
import global from '../../../../../../theme/global';

export default {
  container: {
    position: 'relative',
  },
  containerOpen: {
    ...global.box(),
    ...global.glass(0.7),
    position: 'absolute',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 2,
  },
  suggestion: {
    padding: '8px 12px',
    '&:not(:last-child)': {
      borderBottom: '1px dotted rgba(10, 10, 10, 0.3)',
    },
  },
} as Styles;
