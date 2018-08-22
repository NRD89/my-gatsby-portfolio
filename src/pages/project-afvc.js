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

	ul {
		color: #777777;
		font-size: 1.2rem;
		line-height: 1.7;
		margin: 0 0 1.8rem 3rem;
		list-style: circle;
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
					}} sizes={data.afvc.sizes} />
			</ProjectImage>
			<h1>AFVC Optometry</h1>
			<div className="info">
				<Button>
					<ButtonLink href="https://afvc.vision" target="_blank"><i className="fas fa-desktop" style={{}}></i> View Project</ButtonLink>
				</Button>
			</div>
			<p>This was a freelance project where I was asked to build a website for a local optometry office. The main goal for the website was to draw in more clientele and provide a space for the client to blog. After thorough discussion with the doctor, we came up these criteria for the website:</p>
			<ul>
				<li>User friendly</li>
				<li>Increase new patient visits</li>
				<li>Unique and innovative designs to mimic prestigious businesses in the optometric field</li>
				<li>Providing a New Patient Information PDF document </li>
				<li>Be styled</li>
				<li>Providing a New Patient Appointment Form</li>
				<li>Google Maps</li>
			</ul>
			<p>Working on this project I was given a basic logo and was responsible for the rest of the design of the website. The client provided me with some links to compare to, upon research I found that most of the sites were mobile friendly but not optimized for mobile. In response to this, I utilized Gulp to optimize images and minify files. During the design process I used Photoshop to edit the provided photos and implemented CSS Grid for the image gallery to create a mosaic. To give a more unique design to the website I made the hero image dynamic; I learned how to achieve this by watching Traversy Media’s “Awesome Split Screen Slider Using CSS3 &amp; JavaScript” video and making modifications. </p>
			<div class="technologies">
				<h3>Technologies</h3>
				<Icons>
				<div>
					<Img style={{
						position: 'absolute',
						top: 0,
						left: '5%',
						width: '120px',
						height: '120px'
					}} sizes={data.html.sizes} alt="MongoDB Logo" />
					</div>
					<div>
					<Img style={{
						position: 'absolute',
						top: 0,
						left: '30%',
						width: '120px',
						height: '120px',
					}} sizes={data.css.sizes} alt="Express Logo" />
					</div>
					<div>
					<Img style={{
						position: 'absolute',
						top: 0,
						left: '55%',
						width: '120px',
						height: '120px',
					}} sizes={data.js.sizes} alt="ReactJS Logo" />
					</div>
					<div>
					<Img style={{
						position: 'absolute',
						top: 0,
						left: '80%',
						width: '120px',
						height: '120px'
					}} sizes={data.gulp.sizes} alt="NodeJS Logo" />
					</div>
				</Icons>
			</div>
		</ProjectContainer>
	</PageTransition>
)

export default ProjectAfvc

export const query = graphql`
  query AfvcImgs {
    afvc: imageSharp(id: { regex: "/afvc-snapshot-two.png/"}) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    html: imageSharp(id: { regex: "/html5-logo.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    css: imageSharp(id: { regex: "/css3-logo.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    js: imageSharp(id: { regex: "/javascript-logo.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
		}
		gulp: imageSharp(id: { regex: "/gulp-logo.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;