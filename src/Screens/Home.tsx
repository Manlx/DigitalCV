import styled from 'styled-components';

import ProfilePic from '../assets/ProfilePic.png';
import { Employer } from 'assets';

import { 
  CustomImage,
  NavBar,
  Socials
} from 'Components';


const BigDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--profileCardColor);
  height: var(--ProfileHeight);
  width: var(--ProfileMenuWidth) ;
  border-radius: var(--ProfileBorderRadius);
  overflow: hidden;
  align-items: center;
  box-sizing:border-box;
  z-index: 1;
  gap: 1rem;
  padding-top: 1rem;
  margin-right: var(--ProfileTabSize);
`;

const InfoWrapper = styled.div`
  background-color: var(--infoBlockColor);
  height: var(--ProfileHeight);
  width: calc( var(--ProfileMenuWidth) + var(--ProfileTabSize) + var(--ProfileTabExtendSize)) ;
  left: 0;
  position: absolute;
  z-index: 0;

  translate: calc(var(--ProfileTabExtendSize) * -1) ;

  border-radius: var(--ProfileBorderRadius);

  box-sizing: border-box;
  padding: 0 3rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: end;

  justify-content: center;

  &:hover{
    translate: var( --ProfileTabSize );
  }
`;

const CIEmployerWrapper = styled.div`
  display: none;

  @media screen and (height > 750px )  {
    display: flex;
  }
`;

const H3EmployerWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 600;

  @media screen and (height > 750px )  {
    display: none;
  }
`;

const BBDColor = styled.div`
  color: red;
  display: inline-block;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

export function Home(){
  return (
    <Wrapper>
      <ProfileWrapper>

        <BigDiv>

            <CustomImage $src={ProfilePic} $size='20rem' $bordeRaduis='5rem'/>

          <h1>Manuel A Nunes</h1>
          <h2>Employed At:</h2>

          <CIEmployerWrapper>

            <CustomImage $src={Employer} $size='15rem' $bordeRaduis='5rem'/>

          </CIEmployerWrapper>

          <H3EmployerWrapper>
            <BBDColor>{'BBD '}</BBDColor>
            Software
          </H3EmployerWrapper>
        </BigDiv>

        <InfoWrapper>

          <NavBar />

        </InfoWrapper>

      </ProfileWrapper>

      <Socials/>

    </Wrapper>
  );
}

export default Home;