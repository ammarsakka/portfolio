import Project from "./components/project";
import { PROJECTS_PER_PAGE } from "./constants/constant";
import { ProjectsList } from "./constants/projectsList";

function Projects() {
    return (
        <div className="grid gap-10 py-8">
            <h1 className="text-2xl font-bold">My Projects</h1>
            <div className="grid gap-6">
                {ProjectsList.slice(0, PROJECTS_PER_PAGE).map(
                    (project, index) => (
                        <Project key={index} project={project} />
                    )
                )}
            </div>
            <div className="flex justify-center items-center">
                {ProjectsList.length - PROJECTS_PER_PAGE > 0 && (
                    <button className="text-blue-600 border-blue-600 border-solid border rounded py-3 px-6 font-bold transition-all duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md">
                        View More
                    </button>
                )}
            </div>
        </div>
    );
}

export default Projects;
