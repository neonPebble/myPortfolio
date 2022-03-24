/* eslint-disable import/no-extraneous-dependencies */
const forms = require('@tailwindcss/forms')
const lineclamp = require('@tailwindcss/line-clamp')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx}'],
  // don't ever use dark theme
  theme: {
    extend: {},
    colors: {
      // standard colors
      transparent: 'transparent',
      white: '#fff',
      black: '#000',

      // Main colors
      primary: {
        DEFAULT: '#000228', // shade 1000, rgb(0, 2, 40)
        100: '#F9FAFB',
        200: '#F3F4F6',
        300: '#E5E7EB',
        400: '#D1D5DB',
        500: '#949BA8',
        600: '#666C7C',
        700: '#475160',
        800: '#343E4F',
        900: '#1D2736',
        1000: '#000228',
        1100: '#000114'
      },
      gray: {
        DEFAULT: '#8c8c8c', // shade 600
        100: '#fafafa',
        200: '#f5f5f5',
        300: '#f0f0f0',
        400: '#d9d9d9',
        500: '#bfbfbf',
        600: '#8c8c8c',
        700: '#595959'
      },
      red: {
        // Dust Red from ant design
        DEFAULT: '#f5222d', // shade 600
        100: '#fff1f0',
        200: '#ffccc7',
        300: '#ffa39e',
        400: '#ff7875',
        500: '#ff4d4f',
        600: '#f5222d',
        700: '#cf1322'
      },
      volcano: {
        // Volcano from ant design
        DEFAULT: '#fa541c', // shade 600
        100: '#fff2e8',
        200: '#ffd8bf',
        300: '#ffbb96',
        400: '#ff9c6e',
        500: '#ff7a45',
        600: '#fa541c',
        700: '#d4380d'
      },
      sunset: {
        // Sunset Orange from ant design
        DEFAULT: '#fa8c16', // shade 600
        100: '#fff7e6',
        200: '#ffe7ba',
        300: '#ffd591',
        400: '#ffc069',
        500: '#ffa940',
        600: '#fa8c16',
        700: '#d46b08'
      },
      green: {
        // Polar Green from ant design
        DEFAULT: '#52c41a', // shade 600
        100: '#f6ffed',
        200: '#d9f7be',
        300: '#b7eb8f',
        400: '#95de64',
        500: '#73d13d',
        600: '#52c41a',
        700: '#389e0d'
      },
      blue: {
        // Daybreak Blue from ant design
        DEFAULT: '#1890ff', // shade 600
        100: '#e6f7ff',
        200: '#bae7ff',
        300: '#91d5ff',
        400: '#69c0ff',
        500: '#40a9ff',
        600: '#1890ff',
        700: '#096dd9'
      },

      // Others
      gold: {
        // Calendula Gold from ant design
        DEFAULT: '#faad14', // shade 600
        100: '#fffbe6',
        200: '#fff1b8',
        300: '#ffe58f',
        400: '#ffd666',
        500: '#ffc53d',
        600: '#faad14',
        700: '#d48806'
      },
      yellow: {
        // Sunrise Yellow from ant design
        DEFAULT: '#fadb14', // shade 600
        100: '#feffe6',
        200: '#ffffb8',
        300: '#fffb8f',
        400: '#fff566',
        500: '#ffec3d',
        600: '#fadb14',
        700: '#d4b106'
      },
      cyan: {
        // Cyan from ant design
        DEFAULT: '#13c2c2', // shade 600
        100: '#e6fffb',
        200: '#b5f5ec',
        300: '#87e8de',
        400: '#5cdbd3',
        500: '#36cfc9',
        600: '#13c2c2',
        700: '#08979c'
      },
      purple: {
        // Golden Purple from ant design
        DEFAULT: '#722ed1', // shade 600
        100: '#f9f0ff',
        200: '#efdbff',
        300: '#d3adf7',
        400: '#b37feb',
        500: '#9254de',
        600: '#722ed1',
        700: '#531dab'
      },
      magenta: {
        // Magenta from ant design
        DEFAULT: '#eb2f96', // shade 600
        100: '#fff0f6',
        200: '#ffd6e7',
        300: '#ffadd2',
        400: '#ff85c0',
        500: '#f759ab',
        600: '#eb2f96',
        700: '#c41d7f'
      }
    }
  },
  plugins: [forms, lineclamp]
}
