import { useState } from "react";
import Project from "./components/project";
import { PROJECTS_PER_PAGE } from "./constants/constant";
import { ProjectsList } from "./constants/projectsList";
import moment from "moment";

function Projects() {
  const [perPage, setPerPage] = useState(PROJECTS_PER_PAGE);

  const handlePages = () => {
    const pages = perPage + 3;

    setPerPage(pages);
  };

  return (
    <div className="grid gap-10 py-8">
      <h1 className="text-2xl font-bold">My Projects</h1>
      <div className="grid gap-16 mobile:gap-6">
        {ProjectsList.sort(
          (a, b) => moment(b.date).diff(moment(a.date))
        )
          .slice(0, perPage)
          .map((project, index) => (
            <Project key={index} project={project} />
          ))}
      </div>
      <div className="flex justify-center items-center">
        {ProjectsList.length - perPage > 0 && (
          <button
            className="text-blue-600 border-blue-600 border-solid border rounded py-3 px-6 font-bold transition-all duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md"
            onClick={handlePages}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;
