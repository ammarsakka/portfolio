import React from "react";
import { SkillsList } from "../constants/constant";
import { useAppSelector } from "../../../assets/hooks";
import { IconsProps } from "../interfaces/interface";

function Devops({ theme }: IconsProps) {
    return (
        <div className="grid gap-4">
            <h3 className="text-lg font-semibold">DevOps</h3>
            <div className="flex flex-wrap gap-4">
                {SkillsList.devops.sort().map((item, index) => (
                    <img
                        src={`/images/icons/${theme}/${item}.svg`}
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
