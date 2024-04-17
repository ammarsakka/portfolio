import { useAppSelector } from "../../assets/hooks";
import Cloud from "./components/cloud";
import Database from "./components/database";
import Devops from "./components/devops";
import Programming from "./components/programming";
import Web from "./components/web";

function Skills() {
    const theme = useAppSelector((state) => state.theme.value);

    return (
        <div className="grid gap-10 py-8">
            <h1 className="text-2xl font-bold">My Skills</h1>
            <div className="grid gap-6">
                <Programming theme={theme} />
                <Web theme={theme} />
                <Database theme={theme} />
                <Devops theme={theme} />
                <Cloud theme={theme} />
            </div>
        </div>
    );
}

export default Skills;
