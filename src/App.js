import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import img2 from './images/profile-pic.png';
import moon from './images/icons8-moon-symbol-30.png';
import sun from './images/icons8-sun.svg';
import light from './images/clint-patterson-xfW9ZYfq3uE-unsplash.jpg';

function App() {
	const darkTheme = {
		background:
			'linear-gradient(87deg, rgba(63, 94, 251, 1) 0%, rgba(28, 37, 65, 1) 100%)',
		backgroundImg: `url("https://images.unsplash.com/photo-1590766232095-4f4daf8ca543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3276&q=80")`,
		position: '55%',
		cardBackground: 'gainsboro',
		buttonColor: 'rgba(192,214,223,1)',
	};
	const lightTheme = {
		background:
			'linear-gradient(87deg, rgba(192,214,223,1) 0%, rgba(219,233,238,1) 100%)',
		backgroundImg: `url(${light})`,
		position: '2%',
		cardBackground: '#fff',
		buttonColor: 'rgba(28, 37, 65, 1)',
	};
	const themes = {
		dark: darkTheme,
		light: lightTheme,
	};
	const [theme, setTheme] = useState('light');

	return (
		<Wrapper theme={themes[theme]}>
			<Card theme={themes[theme]}>
				<Background theme={themes[theme]}></Background>
				<PersonalDetails>
					<Image></Image>
					<Name>Rebecca Brietzke</Name>
					<Location>Marion, Texas</Location>
				</PersonalDetails>
				<Numbers>
					<Stat>
						<Amount>4.2k</Amount>
						<Description>Followers</Description>
					</Stat>

					<Stat>
						<Amount>100k</Amount>
						<Description>Likes</Description>
					</Stat>
					<Stat>
						<Amount>200k</Amount>
						<Description>Photos</Description>
					</Stat>
				</Numbers>
			</Card>
			<div className="toggle-container">
				<img src={moon}></img>
				<img src={sun} className="sun"></img>
				<Button
					theme={themes[theme]}
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				></Button>
			</div>
		</Wrapper>
	);
}
export default App;

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.theme.background};
`;

const Card = styled.div`
	height: 450px;
	width: 400px;
	border-radius: 15px;
	background: ${props => props.theme.cardBackground};
`;

const Background = styled.div`
	height: 150px;
	width: 100%;
	background-image: ${props => props.theme.backgroundImg};
	background-size: cover;
	background-position: bottom;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

const PersonalDetails = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Name = styled.h1`
	margin-top: 20px;
`;
const Location = styled.h4`
	margin-top: 5px;
`;
const Numbers = styled.div`
	height: 100px;
	width: 100%;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	border-top: 1px solid #e8e9ec;
	display: flex;
	justify-content: space-evenly;
`;
const Image = styled.div`
	background-image: url(${img2});
	background-size: contain;
	background-position-x: right;
	border-radius: 50%;
	height: 125px;
	width: 125px;
	margin-top: -105px;
	border: 6px solid #fff;
`;

const Stat = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Amount = styled.h3`
	text-align: center;
	font-size: 24px;
	color: #2b6be4;
`;
const Description = styled.p`
	text-align: center;
	font-weight: bold;
	font-size: 12px;
`;

const Button = styled.div`
	background-color: ${props => props.theme.buttonColor};
	height: 25px;
	width: 25px;
	border-radius: 40%;
	position: absolute;
	right: ${props => props.theme.position};
	cursor: pointer;
	transition: all 0.5s ease-out;
`;
