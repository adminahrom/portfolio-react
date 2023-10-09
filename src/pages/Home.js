import Header from './../components/header/Header';

const Home = () => {
	return (
		<>
			<Header />
			<main className='section'>
				<div className='container'>
					<h1 className='title-1'>My Skills</h1>

					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Frontend</h2>
							<p>
								JavaScript, TypeScript, React, HTML5, CSS3, NPM, BootStrap, Git
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Backend</h2>
							<p>NodeJS, MongoDB, PHP</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Home;
