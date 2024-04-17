import { ProjectDetails } from "../constants/interfaces";

interface props {
    project: ProjectDetails;
}

function Project({ project }: props) {
    return (
        <div className="grid gap-4">
            <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm">{project.date}</p>
            </div>
            <div className="flex flex-col mobile:flex-row gap-10">
                <div className="relative overflow-hidden mobile:w-fit rounded-lg shadow-md">
                    <img
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                    <span className="bg-black/20 top-0 left-0 w-full h-full absolute"></span>
                </div>
                <div className="flex flex-col gap-4 mobile:w-2/3">
                    <div className="grid gap-2">
                        <h3 className="text-lg">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((technology, index) => (
                                <img
                                    src={`/images/icons/${technology}.svg`}
                                    alt={technology}
                                    key={index}
                                    width={32}
                                    height={32}
                                    className="basis-8"
                                    title={technology}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg">Description</h3>
                        <p className="text-sm">{project.description}</p>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg">Responsibilities</h3>
                        <p className="text-sm">{project.responsibilities}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
