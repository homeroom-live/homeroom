import glamorous from 'glamorous';

// 16:9 aspect ratios
// 1024×576 - common
// 246x138 - YouTube thumbnail

export default glamorous.video({
  objectFit: 'contain',
  borderRadius: '4px',
  maxWidth: '256px',
  maxHeight: '144px',
});
