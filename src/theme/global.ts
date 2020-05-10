export default {
  glass: (alpha: number = 0.5, blurRadius: number = 6) => ({
    backgroundColor: `rgba(255, 255, 255, ${alpha})`,
    backdropFilter: `blur(${blurRadius}px)`,
    WebkitBackdropFilter: `blur(${blurRadius}px)`,
  }),
  box: () => ({
    boxShadow:
      '0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)',
  }),
};
