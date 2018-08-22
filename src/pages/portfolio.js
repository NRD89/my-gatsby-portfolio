import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions'
import Img from 'gatsby-image'

const Title = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 0 0 10px 0;
	h1 {
		color: #16171b;
		font-size: 2rem;
		font-weight: 700;
		letter-spacing: 4px;
		text-transform: uppercase;
		padding: 0 0 40px 0;
	}
`;

const PortfolioContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 250px 250px 250px 250px;
	grid-gap: 10px;
	@media (max-width: 768px) {
		display: block;
		width: 90%;
		margin: 0 auto;
	}
`;

const BoxLink = styled(Link)`
	background: gray;
	display: block;
	transition: all .4s ease-in-out;
	width: 100%;
	overflow: hidden;
	position: relative;
	&:hover {
		background: rgba(255, 255, 255, 1);
		cursor: pointer;
		-webkit-box-shadow: 0px 2px 72px 2px rgba(0,0,0,0.13);
		-moz-box-shadow: 0px 2px 72px 2px rgba(0,0,0,0.13);
		box-shadow: 0px 2px 72px 2px rgba(0,0,0,0.13);
	}
	@media (max-width: 768px) {
		height: 300px;
		margin-bottom: 30px;
	}
`;

const HoverBg = styled.div`
	background: rgba(255, 255, 255, 0);
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
	transition: all .4s ease-in-out;
	align-items: center;
	position: relative;
	z-index: 2;

	${BoxLink}:hover & {
		background: rgba(255, 255, 255, 0.3);
	}
`;

const Project = styled.div`
	background: #16171b;
	border-radius: 5px;
	color: white;
	font-size: 1.2rem;
	font-weight: 600;
	padding: 10px 20px;
	opacity: 0;
	text-align: center;
	text-transform: uppercase;
	transform: translate3d(0, 400px, 0);
	transition: all .4s ease-in-out .2s;

	${BoxLink}:hover & {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`;

const ThirdPage = ({ data }) => (
	<PageTransition>
		<div style={{ padding: '80px 15px' }}>
			<Title>
				<h1>portfolio</h1>
			</Title>
			<PortfolioContainer>
				<BoxLink to="/project-ecomm" style={{
					gridColumn: '1 / 3',
					gridRow: '1 / 3',
					textDecoration: 'none'
				}}>
					<HoverBg>
						<div>
							<Project>MERN<br />Ecommerce</Project>
						</div>
					</HoverBg>
					<Img style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%'
					}} sizes={data.ecomm.sizes} />
				</BoxLink>
				<BoxLink to="/project-portfolio" style={{
					gridColumn: '3',
					gridRow: '1 / 3',
					textDecoration: 'none'
				}}>
					<HoverBg>
						<div>
							<Project>My<br />Portfolio</Project>
						</div>
					</HoverBg>
					<Img style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%'
					}} sizes={data.portfolio.sizes} />
				</BoxLink>
				<BoxLink to="/future-projects" style={{
					gridColumn: '1',
					gridRow: '3 / 6',
					textDecoration: 'none'
				}}>
					<HoverBg>
						<div>
							<Project>Future<br />Projects</Project>
						</div>
					</HoverBg>
					<Img style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%'
					}} sizes={data.secret.sizes} />
				</BoxLink>
				<BoxLink to="/project-afvc" style={{
					gridColumn: '2 / 4',
					gridRow: '3 / 6',
					textDecoration: 'none'
				}}>
					<HoverBg>
						<div>
							<Project>AFVC<br />Optometry</Project>
						</div>
					</HoverBg>
					<Img style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%'
					}} sizes={data.afvc.sizes} />
				</BoxLink>
			</PortfolioContainer>
		</div>
	</PageTransition>
)

export default ThirdPage

export const query = graphql`
  query ProjectImgs {
    ecomm: imageSharp(id: { regex: "/ecomm-snapshot.png/"}) {
      sizes(maxWidth: 750) {
        ...GatsbyImageSharpSizes
      }
    }
    portfolio: imageSharp(id: { regex: "/portfolio-snapshot.png/"}) {
      sizes(maxWidth: 750) {
        ...GatsbyImageSharpSizes
      }
    }
    secret: imageSharp(id: { regex: "/coming-soon.png/"}) {
      sizes(maxWidth: 750) {
        ...GatsbyImageSharpSizes
      }
    }
    afvc: imageSharp(id: { regex: "/afvc-snapshot.png/"}) {
      sizes(maxWidth: 750) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;