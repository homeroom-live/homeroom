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

export const shadow = () => `
  border-radius: 4px;
  border: 1px solid ${colors.grayLighter};
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
  border: 1px solid ${colors.grayLighter};
`

export const shadowGreen = {
  boxShadow: colors.shadowGreen,
  borderRadius: '4px',
  border: `1px solid ${colors.primary}`,

  ':hover': { transform: 'translateY(-2px)' },
  ':focus': { transform: 'translateY(-2px)' },
}
