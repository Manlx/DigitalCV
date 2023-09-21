import styled from 'styled-components';

import {SocialConfig} from 'Configs';
import { CustomImage } from 'Components';

const SocialsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export function Socials(){
  return (
    <SocialsWrapper>
      {
        SocialConfig.map( (SocialItem, index) => 
          <CustomImage 
            key={ `${index}SocialItem` }
            $size='20rem' 
            $backgroundColor='var(--infoBlockColor )' 
            $bordeRaduis='var(--SocialItemsRaduis)' 
            $src={ SocialItem.Src } 
            $backgroundSize='50%'
            $onHover='filter:brightness(1.4);'
            
            onClick={ ()=>{
              location.href = SocialItem.OnClickNavigation;
            }}
          />
        )
      }
    </SocialsWrapper>
  );
}

export default Socials;