import styled from 'styled-components';

interface styledImageProps {
  $width?           : string
  $height?          : string
  $src?             : string
  $margin?          : string
  $padding?         : string
  $size?            : string
  $bordeRaduis?     : string
  $backgroundColor? : string
  $onHover?         : string
  $backgroundSize?  : string
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
      $size,
      $backgroundColor,
      $backgroundSize
    }) => `
      ${ $src              && `background-image: url(${ $src }); ` }
      ${ $height && !$size && `height: ${ $height }; ` }
      ${ $width  && !$size && `width: ${ $width }; ` }
      ${ $margin           && `margin: ${ $margin }; ` }
      ${ $padding          && `padding: ${ $padding }; ` }
      ${ $size             && `width: ${ $size }; ` }
      ${ $size             && `height: ${ $size }; ` }
      ${ $bordeRaduis      && `border-radius: ${ $bordeRaduis }; ` }
      ${ $backgroundColor  && `background-color: ${ $backgroundColor }; ` }

      ${ `background-size: ${ $backgroundSize } ${ $backgroundSize }; ` }
    `
  }

  background-position: center;
  background-repeat: no-repeat;

  &:hover{
    ${ ({ $onHover}) => $onHover }
  }
`;

CustomImage.defaultProps = {
  $height : '',
  $width: '',
  $src: '',
  $margin: '',
  $padding: '',
  $bordeRaduis: '',
  $size: '100%',
  $backgroundColor: '',
  $backgroundSize: '100%'
};

export default CustomImage;