import Cloud from "./components/cloud";
import Database from "./components/database";
import Devops from "./components/devops";
import Programming from "./components/programming";
import Web from "./components/web";

function Skills() {
    return (
        <div className="grid gap-10 py-8">
            <h1 className="text-2xl font-bold">My Skills</h1>
            <div className="grid gap-6">
                <Programming />
                <Web />
                <Database />
                <Devops />
                <Cloud />
            </div>
        </div>
    );
}

export default Skills;
