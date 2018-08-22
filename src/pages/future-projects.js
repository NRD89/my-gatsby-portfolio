import React from 'react'
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'
import Img from 'gatsby-image'

const ProjectContainer = styled.div`
	padding: 80px 15px;

	h1 {
		font-size: 4rem;
		font-weight: 600;
		font-style: italic;
		margin-bottom: 1.5rem;
	}

	p {
		color: #777777;
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 1.8rem;
    }
    
	h3 {
		font-size: 2rem;
		font-weight: 700;
		margin: 2.7rem 0;
		text-transform: uppercase;
    }
    
    @media (max-width: 768px) {
		h1 {
            font-size: 2.5rem;
            text-align: center;
        }
        
        h3 {
            text-align: center;
        }
	}
`;

const ProjectImage = styled.div`
	width: 100%;
	height: 500px;
	margin-bottom: 3rem;
	overflow: hidden;
	position: relative;

	@media (max-width: 768px) {
		img {
			object-position: left center !important;
		}
	}
`;

const Icons = styled.div`
	width: 100%;
	height: 250px;
	overflow: hidden;
	position: relative;

	img {
		filter: grayscale(100%);
		transition: all .3s ease-in-out !important;
		
		&:hover {
		filter: grayscale(0);
		}
	}

	@media (max-width: 768px) {
		height: 130px;

		img {
			width: 60% !important;
			height: 60% !important;
			filter: grayscale(0);
		}
	}
`;

const ProjectAfvc = ({ data }) => (
	<PageTransition>
		<ProjectContainer>
			<ProjectImage>
			<Img style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }} sizes={data.codin.sizes} />
			</ProjectImage>
			<h1>Future Projects</h1>
			<p>Currently I am working with a group of talented individuals on a project that will help solve a need in the realm of software. Although I cannot disclose the premise of this project, I can say it will be a mobile solution and be built as a PWA.</p>
            <p>In the midst of the previously mentioned project, I am also learning how to leverage WordPress theme development. This tried and true opensource software has stood the test of time, it is currently being utilized as 26% of all websites on the net. So to me this was a no brainer that I had to jump on the band wagon.</p>
            <p>These are just a few of the things I'm working on right now but for the future, I intend to keep solidifying my knowledge and skillset by keeping up with the ever expanding world of web technologies.</p>
			<div class="technologies">
				<h3>Technologies</h3>
				<Icons>
				<div>
					<Img style={{
						position: 'absolute',
						top: '15%',
						left: '5%',
						width: '120px',
						height: '45px'
					}} sizes={data.pwa.sizes} alt="Progressive Web App Logo" />
					</div>
					<div>
					<Img style={{
						position: 'absolute',
						top: 0,
						left: '30%',
						width: '120px',
						height: '120px',
					}} sizes={data.js.sizes} alt="JavaScript Logo" />
					</div>
					<div>
					<Img style={{
						position: 'absolute',
						top: 0,
						left: '55%',
						width: '140px',
						height: '87px',
					}} sizes={data.wp.sizes} alt="WordPress Logo" />
					</div>
					<div>
					<Img style={{
						position: 'absolute',
						top: '-5%',
						left: '80%',
						width: '140px',
						height: '140px'
					}} sizes={data.php.sizes} alt="PHP Logo" />
					</div>
				</Icons>
			</div>
		</ProjectContainer>
	</PageTransition>
)

export default ProjectAfvc

export const query = graphql`
  query FutureImgs {
    codin: imageSharp(id: { regex: "/code-and-coffee.jpg/"}) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    pwa: imageSharp(id: { regex: "/pwa.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    wp: imageSharp(id: { regex: "/wp-logo.png/"}) {
      sizes(maxWidth: 140) {
        ...GatsbyImageSharpSizes
      }
    }
    js: imageSharp(id: { regex: "/javascript-logo.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
	}
	php: imageSharp(id: { regex: "/php.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;