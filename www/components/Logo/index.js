import glamorous from 'glamorous'

import logoImage from '../../static/assets/images/logos/logo-light.svg'

export const Logo = glamorous.img({
  height: '24px',
})

Logo.defaultProps = {
  src: logoImage,
}
