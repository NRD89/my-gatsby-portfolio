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

const ProjectEcomm = ({ data }) => (
	<PageTransition>
		<ProjectContainer>
			<ProjectImage>
				<Img style={{
					position: 'absolute',
					left: 0,
					top: 0,
					width: '100%',
					height: '100%'
				}} sizes={data.mern.sizes} />
			</ProjectImage>
			<h1>MERN Ecommerce</h1>
			<div className="info">
				<Button>
					<ButtonLink href="https://mern-ecommerce.herokuapp.com" target="_blank"><i className="fas fa-desktop"></i> View Project</ButtonLink>
					<ButtonLink href="https://github.com/6-11-a/group-project2" target="_blank"><i className="fas fa-code"></i> View Code</ButtonLink>
				</Button>
			</div>
			<p>This was my final group project from the Woz U software developer program, where
				 I played the role of front end developer and designer. The following were our project rubric guidelines:</p>
			<ul>
				<li>Be full stack</li>
				<li>Support CRUD operations on at least 2 resources</li>
				<li>Have at least 1 many-to-many relationship</li>
				<li>Use a front end framework</li>
				<li>Be styled</li>
				<li>Be responsive (if a web app)</li>
				<li>Exist in a Git repository</li>
				<li>Include user registration and login</li>
			</ul>

			<p>Upon completing this project, I obtained new skills in e-commerce development. The most significant takeaways were (1) leveraging local storage as a shopping cart so the user can exit and not lose the items in their shopping cart and (2) utilizing Axios to perform HTTP requests to grab data from the database and using JavaScript’s .map() method to render it to the front end.</p>
			<div class="technologies">
				<h3>Technologies</h3>
				<Icons>
					<div>
						<Img style={{
							position: 'absolute',
							top: '15%',
							left: '5%',
							width: '120px',
							height: '34px'
						}} sizes={data.mongodb.sizes} alt="MongoDB Logo" />
					</div>
					<div>
						<Img style={{
							position: 'absolute',
							top: '20%',
							left: '30%',
							width: '120px',
							height: '27px',
						}} sizes={data.express.sizes} alt="Express Logo" />
					</div>
					<div>
						<Img style={{
							position: 'absolute',
							top: 0,
							left: '55%',
							width: '120px',
							height: '108px',
						}} sizes={data.react.sizes} alt="ReactJS Logo" />
					</div>
					<div>
						<Img style={{
							position: 'absolute',
							top: 0,
							left: '80%',
							width: '100px',
							height: '108px'
						}} sizes={data.node.sizes} alt="NodeJS Logo" />
					</div>
				</Icons>
			</div>
		</ProjectContainer>
	</PageTransition>
)

export default ProjectEcomm

export const query = graphql`
  query EcommImgs {
    mern: imageSharp(id: { regex: "/mern-ecommerce.png/"}) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    mongodb: imageSharp(id: { regex: "/mongodb.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    express: imageSharp(id: { regex: "/express.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    react: imageSharp(id: { regex: "/reactjs.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
		}
		node: imageSharp(id: { regex: "/nodejs.png/"}) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;