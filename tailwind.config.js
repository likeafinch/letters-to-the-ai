const twColors = require('tailwindcss/colors');

const colors = {
  ...twColors,
  'background-alt': 'rgb(241, 245, 249)',
  'background-main': '#def4f8',
  'text-alt': '#23262b',
  'text-main': '#15171a',
};
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      backgroundSize: {
        16: '4rem',
        '50%': '50%',
        auto: 'auto',
        contain: 'contain',
        cover: 'cover',
      },
      borderColor: colors,
      borderRadius: {
        default: '.25rem',
        full: '9999px',
        lg: '.5rem',
        none: '0',
        sm: '.125rem',
      },
      boxShadow: {
        inverted:
          '0 -1px 15px -3px rgb(222, 244, 248, 0.1), 0 4px 6px -4px rgb(222, 244, 248, 0.1)',
      },
      colors,
      fontFamily: {
        sans: [
          'Open Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        serif: [
          'Cantata One',
          'Constantia',
          'Lucida Bright',
          'Lucidabright',
          'Lucida Serif',
          'Lucida',
          'DejaVu Serif',
          'Bitstream Vera Serif',
          'Liberation Serif',
          'Georgia',
          'serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        '6xl': [
          '52px',
          {
            letterSpacing: '0.05rem',
          },
        ],
        h2: [
          '44px',
          {
            letterSpacing: '0.05em',
            lineHeight: '52px',
          },
        ],
        h3: [
          '32px',
          {
            lineHeight: '40px',
          },
        ],
        h4: [
          '24px',
          {
            lineHeight: '30px',
          },
        ],
        p1: [
          '20px',
          {
            letterSpacing: '0.05em',
            lineHeight: '25px',
          },
        ],
        p2: [
          '18px',
          {
            letterSpacing: '0.05em',
            lineHeight: '24px',
          },
        ],
        p3: [
          '16px',
          {
            letterSpacing: '0.05em',
            lineHeight: '22px',
          },
        ],
        p4: [
          '12px',
          {
            letterSpacing: '0.025em',
            lineHeight: '14px',
          },
        ],
        p5: [
          '12px',
          {
            letterSpacing: '0.025em',
            lineHeight: '16px',
          },
        ],
        p6: [
          '14px',
          {
            lineHeight: '16px',
          },
        ],
      },
      height: {
        13: '52px',
        15: '60px',
        auto: 'auto',
        'background-lg': '300rem',
        fill: '-webkit-fill-available',
        full: '100%',
        half: '50%',
        max: 'max-content',
        screen: '100vh',
        'section-small': '522px',
      },
      letterSpacing: {
        paragraph: '3.2px',
        title: '.5rem',
      },
      maxHeight: {
        fill: '-webkit-fill-available',
        full: '100%',
        screen: '100vh',
      },
      maxWidth: {
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        fill: '-webkit-fill-available',
        full: '100%',
        lg: '50rem',
        md: '40rem',
        screen: '100vw',
        sm: '30rem',
        xl: '60rem',
        xs: '20rem',
      },
      minHeight: {
        0: '0',
        fill: '-webkit-fill-available',
        full: '100%',
        lg: '43rem',
        md: '25rem',
        screen: '100vh',
        sm: '12rem',
        wrap: '21rem',
      },
      minWidth: {
        0: '0',
        '2/3': '66.66667%',
        fill: '-webkit-fill-available',
        full: '100%',
      },
      opacity: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.9',
        100: '1',
      },
      screens: {
        lg: '900px',
        md: '600px',
        sm: '400px',
        xl: '1200px',
        xxl: '1600px',
      },
      textColor: colors,
      width: {
        44: '174px',
        auto: 'auto',
        'background-lg': '165rem',
        fill: '-webkit-fill-available',
        full: '100%',
        max: 'max-content',
        screen: '100vw',
        stats: '669px',
        'wide-button': '349px',
      },
      zIndex: {
        '-1': -1,
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        1000: 1000,
        auto: 'auto',
      },
    },
  },
};
