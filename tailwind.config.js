const colors = {
  primary: '#727884',
  secondary: '#adceff',
  tertiary: 'rgb(220, 240, 252)',
  main: '#d1dbf9',
  black: '#222b2f',
  'black-soft': 'rgb(35, 38, 43)',
  'black-link': 'rgba(10, 10, 20, 0.7)',
  'grey-darkest': '#273238',
  'grey-darker': '#364349',
  'grey-dark': '#70818a',
  grey: 'rgb(209 216 239)',
  'grey-light': '#dae4e9',
  'grey-lighter': '#f3f7f9',
  'grey-lightest': '#fafcfc',
  white: '#ebecfa',
  transparent: 'transparent',
  'blue-black': '#161719',
  'blue-grey': '#23262b',
  'red-darkest': '#420806',
  'red-darker': '#6a1b19',
  'red-dark': '#cc1f1a',
  red: '#bc899f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#542605',
  'orange-darker': '#7f4012',
  'orange-dark': '#c1611f',
  orange: '#e07628',
  'orange-light': '#ffa31b',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  yellow: '#e9af32',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',

  'green-darkest': '#032d19',
  'green-darker': '#0b4228',
  'green-dark': '#1f9d55',
  green: '#89bc90',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#174e4b',
  'teal-dark': '#38a89d',
  teal: '#89bcbb',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#0a224e',
  'blue-darker': '#103d60',
  'blue-dark': '#2779bd',
  blue: '#8694b7',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#080f20',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#454877',
  indigo: '#8993bc',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#1f133f',
  'purple-darker': '#352465',
  'purple-dark': '#794acf',
  purple: '#9389bc',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#45051e',
  'pink-darker': '#72173a',
  'pink-dark': '#eb5286',
  pink: '#f2d2e9',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',
};
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      screens: {
        sm: '400px',
        md: '600px',
        lg: '900px',
        xl: '1200px',
        xxl: '1600px',
      },
      fonts: {
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
      textSizes: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '16px', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '5rem',
        '7xl': '8rem',
      },
      fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      leading: {
        none: 1,
        tight: 1.25,
        normal: 1.5,
        loose: 2,
      },
      tracking: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em',
      },
      textColors: colors,
      backgroundColors: colors,
      borderWidths: {
        default: '1px',
        0: '0',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      borderColors: Object.assign({ default: colors['grey-light'] }, colors),
      borderRadius: {
        none: '0',
        sm: '.125rem',
        default: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
      width: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',
        half: '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.66667%',
        '5/6': '83.33333%',
        full: '100%',
        screen: '100vw',
        fill: '-webkit-fill-available',
        max: 'max-content',
      },
      height: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',
        128: '32rem',
        half: '50%',
        full: '100%',
        screen: '100vh',
        fill: '-webkit-fill-available',
        max: 'max-content',
      },
      minWidth: {
        0: '0',
        '2/3': '66.66667%',
        full: '100%',
        fill: '-webkit-fill-available',
      },
      minHeight: {
        0: '0',
        sm: '12rem',
        wrap: '21rem',
        full: '100%',
        screen: '100vh',
        fill: '-webkit-fill-available',
      },
      maxWidth: {
        xs: '20rem',
        sm: '30rem',
        md: '40rem',
        lg: '50rem',
        xl: '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        full: '100%',
        screen: '100vw',
        fill: '-webkit-fill-available',
      },
      maxHeight: {
        full: '100%',
        screen: '100vh',
        fill: '-webkit-fill-available',
      },
      padding: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
      },
      margin: {
        auto: 'auto',
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
      },
      negativeMargin: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
      },
      boxShadow: {
        default: `0px 2px 0 0 ${colors.white}`,
        error: `-4px 0px 0 0 ${colors.pink}`,
        hover: `0px 4px 0 0 ${colors.white}`,
        focus: `0 4px 0 0 ${colors.secondary}`,
      },
      shadows: {
        default: '0 2px 4px 0 rgba(209,219,249,0.10)',
        md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
        lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
        inner: `inset 0 0 1px 1.5px ${colors.primary}`,
        secondary: `inset 0 0 .4px 2px ${colors.secondary}`,
        none: 'none',
      },
      zIndex: {
        auto: 'auto',
        '-1': -1,
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        1000: 1000,
      },
      opacity: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.9',
        100: '1',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        16: '4rem',
      },
      backgroundColor: colors,
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
      },
      letterSpacing: {
        title: '.5rem',
        paragraph: '3.2px',
      },
    },
  },
  variants: {
    width: ['responsive', 'hover'],
    height: ['responsive', 'hover'],
    opacity: ['hover'],
    boxShadow: ['hover', 'focus'],
    backgroundRepeat: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundSize: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  options: {
    prefix: '',
    important: false,
  },
};
