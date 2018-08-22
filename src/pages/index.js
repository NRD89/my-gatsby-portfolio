import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'

import Img from 'gatsby-image'

const TopContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 0 0 0;
  h1 {
    color: #16171b;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  p {
    color: #929292;
    text-transform: capitalize;
    margin-bottom: 4rem;
  }
`;

const StyledLink = styled(Link)`
  color: #16171b;
  border-bottom: 2px solid #ff9b05;
  font-weight: 600;
  letter-spacing: 2px;
  padding-bottom: 10px;
  text-decoration: none;
  transition: all .4s ease-in-out;

  &:hover {
    color: #ff9b05;
    border-bottom: 2px solid #16171b;
  }

  @media (max-width: 768px) {
    font-size: .9rem;
  }
`;

const BackgroundImg = styled.div`
  height: 85vh;
`;

const IndexPage = ({ data }) => (
  <PageTransition>
    <TopContainer>
      <div style={{marginLeft: '15px'}}>
        <h1>Nathan Dalton</h1>
        <p>Front End Developer<br></br>
        &amp; Web Designer</p>
        <StyledLink to="/portfolio">Recent Projects</StyledLink>
      </div>
      <BackgroundImg>
        <Img style={{maxWidth: '575px', height: '85vh'}} sizes={data.background.sizes} />
      </BackgroundImg>
    </TopContainer>
  </PageTransition>
)

export default IndexPage

export const query = graphql`
  query HomeImg {
    background: imageSharp(id: { regex: "/alpine.jpg/"}) {
      sizes(maxWidth: 575) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
