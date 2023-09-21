import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.div`
  font-size:1.5em;
  display: flex;
  box-sizing:border-box;
  background-color: var(--NavItemColor);
  padding: 0.75em 1em;
  width: 100%;
  border-radius: 20px 0 20px 0;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover{
    filter:brightness(1.2);
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--ProfileTabExtendSize);
  height: 75%;
  gap: 3rem;
`;


export function NavBar(){
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavItem onClick={()=>{
        navigate('/Academics');
      }}>
        Academics
      </NavItem>

      <NavItem onClick={()=>{
        navigate('/CatShowCase');
      }}>
        Feline Flex
      </NavItem>

      <NavItem onClick={()=>{
        location.href= 'https://mfdot.com/';
      }}>
        Externals
      </NavItem>
    </NavContainer>
  );
}

export default NavBar;