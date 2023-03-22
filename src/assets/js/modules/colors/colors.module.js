export const primaryColor = {
  white: '#fff',
  black: '#000',
  yellow: '#',
  orange: '#FF6F00',
  gray: '',
  blue: '#7ABDFF',
  red: '#ff0000',
}

export const othersColors = {
  x1: 'linear-gradient(180deg, #050A11 0%, rgba(241, 135, 56, 0.97) 100%)',
  x2: 'rgba(0, 0, 0, 0.44)', // bgItemNames & Cotes
  x3: 'rgb(255, 152, 0, 0.26)', // border Date time
  x4: 'rgba(0, 0, 0, 0.9)' //bg footer
}

export const lightThemeColors = {
  primaryColor,
  system: {
    success: '#34C759',
    error: '#E53935',
    red: '#E6402E', //yes
    orange: '#FF9500',
    yellow: '#FFCC00',
    green: '#34C759',
    teal: '#5AC8FA',
    blue: '#0077FF', //yes
    indigo: '#5856D6',
    purple: '#AF52DE',
    pink: '#FF2D55',
    gray: {
      '01': '#9D9592', //yes
      '02': '#AEAEB2',
      '03': '#E5EAF3', //yes
      '04': '#D1D1D6',
      '05': '#E5E5EA',
      '06': '#F2F2F7',
      '07': '#8097C3'
    },
    blue_: {
      '01': '#013087',
      '08': '#ecf7f9'
    }
  }
}

export const darkThemeColors = {
  primaryColor,
  system: {
    success: '#34C759',
    error: '#E53935',
    red: '#FF453A',
    orange: '#FF9F0A',
    yellow: '#FFD60A',
    green: '#32D74B',
    teal: '#64D2FF',
    blue: '#0A84FF',
    indigo: '#5E5CE6',
    purple: '#BF5AF2',
    pink: '#FF2D55',
    gray: {
      '01': '#8E8E93',
      '02': '#636366',
      '03': '#48484A',
      '04': '#3A3A3C',
      '05': '#2C2C2E',
      '06': '#1C1C1E',
    },
  }
}

export const COLORS = {
  lightThemeColors,
  darkThemeColors
}

let currentTheme = 'light'

export const getColor = (opt={}) => {
  const color = opt.color??'black'
  const level = opt.level? (opt.level<10?`0${opt.level}`:opt.level):null
  const type = opt.type??'system'
  
  const colors = currentTheme === 'light' ? COLORS.lightThemeColors : COLORS.darkThemeColors
  return colors[type]
  //console.log('level', level)

  return level? colors[type][color][level]:colors[type][color]
}
