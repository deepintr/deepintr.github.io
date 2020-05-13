import { Styles } from 'react-jss';
import global from '../../../../theme/global';

export default {
  root: {
    backgroundColor: `rgba(255, 255, 255, .9)`,
    ...global.glass(),
    ...global.box(),
  },
} as Styles;
