import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';

const Projects = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{projects.map((project, id) => {
						return (
							<Project
								key={id}
								title={project.title}
								img={project.img}
								index={id}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
