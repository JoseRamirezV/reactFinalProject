/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/components/*.jsx', './src/*.jsx'],
   theme: {
      extend: {
         keyframes: {
            grow: {
               from: {
                  width: '0px',
                  height: '0px',
               },
               to: {
                  width: '100%',
                  height: '100%',
               },
            },
            spawn: {
               '0%': {
                  transform: 'scale(0.8)',
               },
               '50%': {
                  transform: 'scale(1.2)',
               },
               '100%': {
                  transform: 'scale(1)',
               },
            },
         },
         animation: {
            grow: 'grow .2s',
            spawn: 'spawn .3s',
         },
      },
   },
   plugins: [],
};
