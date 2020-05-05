import { IParticlesParams } from 'react-particles-js';

export default {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: '#777',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0.2,
        color: '#555',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: '',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.2,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: true,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: '#555',
      opacity: 0.3,
      width: 0.75,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: true,
        rotateX: 1200,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
} as IParticlesParams;
