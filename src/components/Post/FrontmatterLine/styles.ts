import { Styles } from 'react-jss';

const styles: Styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '& *': {
      display: 'inline-block',
    },
  },
  title: {
    marginBottom: '0 !important',
    display: 'inline-block',
  },
  paragraph: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '2.3',
    fontWeight: 700,
    color: '#8F99A3',
    '&>*': {
      marginInlineEnd: `0.5rem`,
    },
    '& .icon': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  divider: {
    paddingBottom: '0.3rem',
    marginBottom: '0.6rem',
    borderBottom: '1px solid #E6EAEE',
  },
};

export default styles;
