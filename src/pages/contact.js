import React from 'react'
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'

const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 0 80px 0;
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

const ContactLinks = styled.div`
		display: block;
		text-align: center;

		h5 {
			color: #16171b;
			font-size: 1.3rem;
			font-weight: 500;
			margin: 0 0 20px 0;
		}

		i {
			color: #16171b;
			font-size: 3rem;
			margin: 0 0 40px 0;
			transition: all .3s ease-in-out;

			&:hover {
				color: #ff9b05;
			}
		}
`;

const FourthPage = () => (
	<PageTransition>
		<div style={{padding: '80px 15px'}}>
			<Title>
				<h1>contact <span>me</span></h1>
			</Title>
			<ContactLinks>
				<div>
					<h5>Email</h5>
					<a href="mailto:ndaltondev@gmail.com" target="_blank"><i className="far fa-envelope"></i></a>
				</div>
				<div>
					<h5>LinkedIn</h5>
					<a href="https://www.linkedin.com/in/nathan-dalton-689482116/" target="_blank"><i className="fab fa-linkedin"></i></a>
				</div>
				<div>
					<h5>Github</h5>
					<a href="https://github.com/NRD89" target="_blank"><i className="fab fa-github-square"></i></a>
				</div>
			</ContactLinks>
		</div>
	</PageTransition>
)

export default FourthPage