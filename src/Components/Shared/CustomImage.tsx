import styled from 'styled-components';

interface styledImageProps {
  $width?       : string
  $height?      : string
  $src?         : string
  $margin?      : string
  $padding?     : string
  $size?        : string
  $bordeRaduis? : string
}

export const CustomImage = styled.div<styledImageProps>`
  ${
    ({
      $height,
      $src,
      $width,
      $margin,
      $padding,
      $bordeRaduis,
      $size
    }) => `
      ${ $src              && `background-image: url(${ $src }); ` }
      ${ $height && !$size && `height: ${ $height }; ` }
      ${ $width  && !$size && `width: ${ $width }; ` }
      ${ $margin           && `margin: ${ $margin }; ` }
      ${ $padding          && `padding: ${ $padding }; ` }
      ${ $size             && `width: ${ $size }; ` }
      ${ $size             && `height: ${ $size }; ` }
      ${ $bordeRaduis      && `border-radius: ${ $bordeRaduis }; ` }
    `
  }
  background-position: center;
  background-size: 100% 100%; 
`;

CustomImage.defaultProps = {
  $height : '',
  $width: '',
  $src: '',
  $margin: '',
  $padding: '',
  $bordeRaduis: '',
  $size: '100%'
};

export default CustomImage;