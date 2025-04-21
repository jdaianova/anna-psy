export const animationKeyframes = {
  '@keyframes slide-in-left': {
    '0%': { transform: 'translateX(-100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  '@keyframes slide-in-right': {
    '0%': { transform: 'translateX(100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  '@keyframes slide-in-up': {
    '0%': {
      opacity: '0',
      transform: 'translateY(100px)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
  '@keyframes swing': {
    '0%': { transform: 'rotate(0deg)' },
    '15%': { transform: 'rotate(3deg)' },
    '30%': { transform: 'rotate(-3deg)' },
    '45%': { transform: 'rotate(2deg)' },
    '60%': { transform: 'rotate(-2deg)' },
    '75%': { transform: 'rotate(1deg)' },
    '100%': { transform: 'rotate(0deg)' },
  },
};

export const animationUtilities = {
  '.slide-in-left': {
    animation: 'slide-in-left 0.6s ease-out forwards',
  },
  '.slide-in-right': {
    animation: 'slide-in-right 0.6s ease-out forwards',
  },
  '.slide-in-up': {
    animation: 'slide-in-up 0.8s ease-out both',
    willChange: 'transform, opacity',
  },
  '.swing': {
    animation: 'swing 1.2s ease-in-out',
  },

  '.swing-hover:hover': {
    animation: 'swing 1.2s ease-in-out',
  },
};

