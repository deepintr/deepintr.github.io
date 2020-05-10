import { Styles } from 'react-jss';
import global from '../../../../theme/global';

const styles: Styles = {
  root: {
    display: 'relative',
  },
  logo: {
    ...global.box(),
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
    marginBottom: '1rem',
    padding: '4px',
  },
  title: {
    fontWeight: 400,
    fontSize: '1.6rem',
  },
  seperator: {
    position: 'absolute',
    zIndex: -5,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    paddingTop: '1rem',
  },
};

export default styles;
