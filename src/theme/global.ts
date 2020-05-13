import noiseImg from '../images/noise.png';

export default {
  glass: (blur: number = 6, alpha: number = 0.5) => ({
    backgroundColor: `rgba(255, 255, 255, ${Math.min(0.9, alpha * 2)})`,
    backgroundImage: `url(${noiseImg})`,
    backgroundSize: '100px',
    [`@supports ((backdrop-filter: blur(${blur}px)) or (-webkit-backdrop-filter: blur(${blur}px)))`]: {
      backgroundColor: `rgba(255, 255, 255, ${Math.max(0.1, alpha / 2)})`,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
    },
  }),
  box: () => ({
    boxShadow:
      '0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)',
  }),
  dropdown: (borderRadius: number = 6) => ({
    borderRadius: `${borderRadius}px`,
    borderTop: 'none',
    boxShadow: '0 8px 8px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)',
  }),
};
