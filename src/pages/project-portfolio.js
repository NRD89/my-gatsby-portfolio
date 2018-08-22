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


const Button = styled.div`
	padding: 20px 0 44px 0;

	@media (max-width: 768px) {
		padding: 20px 0 10px 0;
	}
`;

const ButtonLink = styled.a`
	display: inline-block;
	padding: 10px 20px;
	border-radius: 3px;
	color: white;
	background: #16171b;
	font-weight: 700;
	margin: 0 10px 0 0;
	text-decoration: none;
	text-transform: capitalize;
	transition: all .25s ease-in-out;

	i {
		color: #ff9b05;
		margin-right: 10px;
		
	}

	&:hover {
		background: #fff;
		color: #ff9b05;
		font-weight: 700;

		i {
			color: #16171b;
		}
	}

  @media (max-width: 768px) {
		display: block
		text-align: center;
		margin: 0 0 30px 0;
  }
`;

const Icons = styled.div`
	width: 100%;
	height: 250px;
	overflow: hidden;
	position: relative;

	img {
		max-width: 120px;
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
					}} sizes={data.portfolio.sizes} />
			</ProjectImage>
			<h1>My Portfolio</h1>
			<div className="info">
				<Button>
					<ButtonLink href="https://github.com/6-11-a/group-project2" target="_blank"><i className="fas fa-code"></i> View Code</ButtonLink>
				</Button>
			</div>
			<p>I started off building my portfolio site in HTML and CSS, however, I wanted to experiment with a static site generator with PWA qualities. I came across a React based static site generator called GatsbyJS which provides data and code splitting automatically. Essentially it adds only critical aspects of the site to accomplish the fastest speed possible. Since I was already familiar with react it was easy for me to transfer my files over. To aid in the ease of this process, I used styled components and inline CSS. Although, I was unfamiliar with styled components I learned it through reading the documentation and found it to have a pretty low learning curve (which was a relief).</p>
			<p>A personal goal of mine was to have optimal user experience and page performance. I provided these qualities by adding smooth page transitions and image optimization, Gatsby plugins such as gatsby-image and gatsby-plugin-sharp allows developers a farely easy way (a bit difficult if you aren't familiar with GraphQL and positioning images) to lazy-load and greatly optimize images.</p>
			<p>Overall, working with Gatsby was a pleasant experience. Even though there were quite a bit of issues with versioning and a bit of frustration with gatsby-image, I would definitely recommend learning Gatsby for building your next static site!</p>
			<div class="technologies">
				<h3>Technologies</h3>
				<Icons>
					<div>
						<Img style={{
							position: 'absolute',
							top: 0,
							left: '30%',
							width: '120px',
							height: '120px'
						}} sizes={data.gatsby.sizes} alt="MongoDB Logo" />
					</div>
					<div>
						<Img style={{
							position: 'absolute',
							top: 0,
							left: '55%',
							width: '120px',
							height: '120px',
						}} sizes={data.styled.sizes} alt="Express Logo" />
					</div>
				</Icons>
			</div>
		</ProjectContainer>
	</PageTransition>
)

export default ProjectAfvc

export const query = graphql`
  query PortfolioImgs {
    portfolio: imageSharp(id: { regex: "/portfolio-snapshot-two.png/"}) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    gatsby: imageSharp(id: { regex: "/gatsby-icon.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    styled: imageSharp(id: { regex: "/styled-components.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;