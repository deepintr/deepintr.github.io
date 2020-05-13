import { Styles } from 'react-jss';
import global from '../../../../theme/global';

export default {
  root: {
    ...global.glass(10, 0.3),
    ...global.box(),
  },
} as Styles;
