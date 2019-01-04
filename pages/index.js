import Layout from '../components/Layout';

export default () => (
	<Layout>
		<main>
			<div>
				<h2 className='box-header technologies-title'>Technologies</h2>
				<div className='technologies-container'>
					<div className='technology-wrap'>
						<i className='fas fa-laptop-code fa-2x' />
						<h3>Front End</h3>
						<ul className='tech-list fe'>
							<li>Bootstrap</li>
							<li>CSS</li>
							<li>HTML5</li>
							<li>JavaScript</li>
							<li>Jest</li>
							<li>React</li>
							<li>Ruby on Rails</li>
						</ul>
					</div>
					<div className='technology-wrap'>
						<i className='fas fa-database fa-2x' />
						<h3>Back End</h3>
						<ul className='tech-list be'>
							<li>Express</li>
							<li>MongoDB</li>
							<li>Mongoose</li>
							<li>MySQL</li>
							<li>Node</li>
							<li>Postgresql</li>
							<li>Ruby on Rails</li>
						</ul>
					</div>
					<div className='technology-wrap'>
						<i className='fas fa-toolbox fa-2x' />
						<h3>Tools</h3>
						<ul className='tech-list tools'>
							<li>Codepen</li>
							<li>Create React App</li>
							<li>Github</li>
							<li>Linux</li>
							<li>Next</li>
							<li>Terminal</li>
							<li>VS Code</li>
							<li>Windows Subsystem for Linux</li>
						</ul>
					</div>
				</div>
			</div>
			<h2 className='box-header feature-title'>Featured Work</h2>
			<div className='works-container'>
				<div className='project-wrap pixel'>
					<img
						src='../static/img/pixel.png'
						alt='Pixel Art Maker Project'
						className='project-image'
					/>
					<div
						className='project-details'
						onClick={() => {
							return true;
						}}
					>
						<h3 className='project-name'>Pixel Art Maker</h3>
						<p className='project-desc'>JavaScript pixel art design app</p>
						<a
							href='https://protected-beyond-69634.herokuapp.com/'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
					<div className='overlay' />
				</div>
				<div className='project-wrap calculator'>
					<div className='overlay' />
					<img
						src='../static/img/calculator.png'
						alt='CodePen Calculator'
						className='project-image'
					/>
					<div
						className='project-details'
						onClick={() => {
							return true;
						}}
					>
						<h3 className='project-name'>Calculator</h3>
						<p className='project-desc'>Calculator written in JavaScript</p>
						<a
							href='https://codepen.io/geekypghrunner/full/KyaexY/'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</div>
				<div className='project-wrap week-to-week'>
					<div className='overlay' />
					<img
						src='../static/img/week-to-week.png'
						alt='Ruby on Rails Planner App'
						className='project-image'
					/>
					<div
						className='project-details'
						onClick={() => {
							return true;
						}}
					>
						<h3 className='project-name'>Week-to-Week</h3>
						<p className='project-desc'>
							Ruby on Rails todo app with Google Calendar integration
						</p>
						<a
							href='https://week-to-week.herokuapp.com/users/sign_in'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</div>
			</div>
		</main>
	</Layout>
);
