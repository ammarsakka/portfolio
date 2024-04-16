import React from "react";
import { SkillsList } from "../constants/constant";
import { useTheme } from "../../../assets/store/localStorage";

function Devops() {
    const { theme } = useTheme();

    return (
        <div className="grid gap-4">
            <h3 className="text-lg font-semibold">DevOps</h3>
            <div className="flex flex-wrap gap-4">
                {SkillsList.devops.sort().map((item, index) => (
                    <img
                        src={`/images/icons/${
                            item === "github"
                                ? theme === "dark"
                                    ? `${item}_white`
                                    : item
                                : item
                        }.svg`}
                        alt={item}
                        key={index}
                        width={64}
                        height={64}
                        className="basis-16"
                        title={item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Devops;
