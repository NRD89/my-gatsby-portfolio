import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  display: flex;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: white;
    margin: 0;
    transition: .3s all ease-in-out;
    &:hover {
      color: #ff9b05;
    }
  }
  
`;

const Nav = styled.nav`
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1.2px;
  color: #16171b;
  padding: 10px 10px;
  transition: .3s all ease-in-out;
  &:hover {
    color: #ff9b05;
  }
  @media (max-width: 534px) {
    font-size: .8rem;
    font-weight: 500;
    padding: 15px 5px 0;
  }
`;

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
      <Logo>
        <Link to="/" style={{
          background: '#16171b',
          padding: '5px 10px',
          color: 'white',
          textDecoration: 'none'
        }}>
          <h1>ND</h1> 
        </Link>
      </Logo>
      <Nav>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Nav>
    </HeaderWrapper>
)

export default Header
