import colorsUtilities from './src/app/styles/tailwind/tailwind.colors.js';
import fontsUtilities from './src/app/styles/tailwind/tailwind.fonts.js';
import flexboxUtilities from './src/app/styles/tailwind/tailwind.flexbox.js';
import designUtilities from './src/app/styles/tailwind/tailwind.design.js';
import { animationKeyframes, animationUtilities } from './src/app/styles/tailwind/tailwind.animations.js';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sPhone: '400px',
        mPhone: '500px',
        sm: '640px',  
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        mdLowHeight: { raw: '(min-width: 1024px) and (max-height: 650px)' },
      },
    },
  },
  plugins: [
    function ({ addUtilities, addComponents }) {
      addUtilities({
        ...colorsUtilities,
        ...fontsUtilities,
        ...flexboxUtilities,
        ...designUtilities,
        ...animationUtilities,
      });

      addComponents({
        ...animationKeyframes,
      });
    },
  ],
};
