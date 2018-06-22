import glamorous from 'glamorous'

const sizes = {
  xsmall: '14px',
  small: '24px',
  regular: '32px',
  medium: '48px',
  large: '72px',
  xlarge: '144px',
}

export const Thumbnail = glamorous.img(
  {
    borderRadius: '4px',
  },
  ({ size }) => ({
    height: sizes[size || sizes.regular],
    minWidth: sizes[size || sizes.regular],
    maxWidth: sizes[size || sizes.regular],
  }),
)
