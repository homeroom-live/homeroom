// Animations and Transitions

export const transition = 'all 0.2s ease-in'
export const opacity = '0.75'

// Spacing

export const spacing = {
  xsmall: '5px',
  small: '10px',
  regular: '15px',
  medium: '30px',
  large: '45px',
  xlarge: '90px',
  xxlarge: '135px',
  xxxlarge: '256px',
}

export const borderRadius = '4px'

const NAVBAR_HEIGHT = '74px'
export const HEIGHT_MINUS_NAVBAR = `calc(100vh - ${NAVBAR_HEIGHT})`

// Colors

export const colors = {
  primary: '#70BF8E',
  secondary: '#424B54',
  white: '#fff',
  black: '#252A30',
  gray: '#A0A5A9',
  grayDarkest: '#31363C',
  grayDarker: '#A0A5A9',
  grayDark: '#C6C9CB',
  grayLight: '#F8F8FA',
  grayLighter: '#F1F1F1',
  grayLightest: '#F8F8FA',
  danger: '#FE5F55',

  // secondary color
  shadow: '0 5px 15px 0 rgba(66, 75, 84, 0.10)',
  shadowActive: '0 15px 30px 0 rgba(66, 75, 84, 0.10)',
  shadowGreen: '0 15px 30px 0 rgba(112, 191, 142, 0.15)',

  // Stripe's shadow example
  // shadow: 'rgba(50,50,93,.0980392) 0 15px 35px, rgba(0,0,0,.0666667) 0 5px 15px',
}

// Containers and Cards

export const border = `1px solid ${colors.grayLighter}`
export const shadow = () => `
  border-radius: 4px;
  border: ${border};
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: ${colors.shadowActive};
    transform: translateY(-2px);
  }
`
export const outline = () => `
  border-radius: 4px;
  border: ${border};
`
export const shadowGreen = {
  boxShadow: colors.shadowGreen,
  borderRadius: '4px',
  border: `1px solid ${colors.primary}`,

  ':hover': { transform: 'translateY(-2px)' },
  ':focus': { transform: 'translateY(-2px)' },
}

export const fontSizes = {
  xxsmall: '10px',
  xsmall: '12px',
  small: '14px',
  regular: '16px',
  medium: '18px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',
}

export const fontWeights = {
  regular: '300',
  medium: '500',
  bold: '700',
}
