module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    fontFamily: {
      pixel: ['PixelArt-Regular'],
      sans: ['OpenSans'],
      sansbold: ['OpenSans-Bold'],
      huballi: ['Hubballi']
    },
    colors: {
      primary: '#7eff7bff',
      white: '#e3d4adff',
      grullo: '#ac9f7fff',
      black: '#0E1A28ff',
      bolive: '#4d493aff',
      screamingreen: '#7eff7bff'
    },
    extend: {
      height: {
        nav: '10vh',
        main: '90vh'
      },
      minHeight: {
        main: '90vh'
      },
      width: {
        30: '30px',
        40: '40px',
        50: '50px',
        75: '75px',
        100: '100px',
        200: '200px'
      }
    }
  },
  plugins: []
}

// $banana-mania: #fce8b6ff;
// $grullo: #ac9f7fff;
// $dutch-white: #e3d4adff;
// $screamin-green: #7eff7bff;
// $black-olive: #4d493aff;

// --rich-black-fogra-29: #0E1A28ff;
// --oxford-blue: #191F32ff;
// --alloy-orange: #BF6525ff;
// --ming: #0D616Eff;
// --palatinate-purple: #58264Dff;
// --xiketic: #1B1A27ff;
