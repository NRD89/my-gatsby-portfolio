import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions'
import Img from 'gatsby-image'
import Helmet from "react-helmet"

const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 0 40px 0;
  h1 {
    color: #16171b;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  span {
    color: #ff9b05;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
    h1 {
      padding: 0 30px 30px 30px;
    }
  }
`;

const AboutInfo = styled.div`
  padding: 0 15px 0 30px;
  line-height: 1.5;
  p {
    color: #16171b;
    font-size: 1.3rem;
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Box = styled.div`
  border-bottom: 3px solid #ff9b05;
  padding: 15px 25px;
  transition: all .4s ease-in-out;
  &:hover {
    -webkit-box-shadow: 0px 25px 72px 2px rgba(0,0,0,0.13);
    -moz-box-shadow: 0px 25px 72px 2px rgba(0,0,0,0.13);
    box-shadow: 0px 25px 72px 2px rgba(0,0,0,0.13);
  }
  h5 {
    color: #16171b;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  ul {
    list-style: none;
  }
  li {
    color: #808080;
    line-height: 1.4;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
    -webkit-box-shadow: 0px 2px 50px 2px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 2px 50px 2px rgba(0,0,0,0.1);
    box-shadow: 0px 2px 50px 2px rgba(0,0,0,0.1);

    ul {
      text-align: center;
      padding: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #16171b;
  border-bottom: 2px solid #ff9b05;
  transition: .3s all ease-in-out;
  &:hover {
    color: #ff9b05;
    border-bottom: 2px solid #16171b;
  }
`;

const SecondPage = ({data}) => (
  <PageTransition>
    <div style={{padding: '80px 15px'}}>
      <Title>
        <h1>about <span>me</span></h1>
      </Title>
      <AboutContainer>
        <h1>
          <Img style={{
          height: '400px',
          width: '100%',
          marginRight: '300px'
        }} sizes={data.background.sizes} alt="Headshot of Nathan Dalton" />
        </h1>
        <AboutInfo>
          <p>Hi I'm Nathan Dalton, I'm a Front End Developer with an eye for design. I currently work as a freelancer based in Riverside, California. Although I love freelancing, I am not opposed to an in-house or remote position at the right agency or company. So whether you are a prospective client, employer or friend don't hesitate to <StyledLink to="/contact">contact me</StyledLink>.</p>
        </AboutInfo>
      </AboutContainer>
      <BoxContainer>
        <Box>
          <div></div>
          <h5>Languages / Frameworks</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </Box>
        <Box>
          <div></div>
          <h5>Technologies</h5>
          <ul>
            <li>VisualStudio2015</li>
            <li>Atom</li>
            <li>Git</li>
            <li>NPM</li>
            <li>Yarn</li>
            <li>SPA Design</li>
            <li>Dependency Injection</li>
            <li>Repository Pattern</li>
            <li>Heroku</li>
            <li>mLab</li>
          </ul>
        </Box>
        <Box>
          <div></div>
          <h5>Skills</h5>
          <ul>
            <li>Agile Methodologies</li>
            <li>SCRUM</li>
            <li>Browser Debugging</li>
            <li>Source Control</li>
            <li>Adobe Suite</li>
            <li>Wireframing</li>
            <br/>
            <li style={{
              fontWeight: '700',
              marginBottom: '15px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>Currently Learning</li>
            <li>Wordpress Theme Development</li>
            <li>Progressive Web Apps</li>
          </ul>
        </Box>
      </BoxContainer>
    </div>
  </PageTransition>
)

export default SecondPage

export const query = graphql`
  query ProfileImg {
    background: imageSharp(id: { regex: "/NRD-headshot.png/"}) {
      sizes(maxWidth: 780) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
