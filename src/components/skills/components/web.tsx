import React from "react";
import { SkillsList } from "../constants/constant";
import { IconsProps } from "../interfaces/interface";

function Web({ theme }: IconsProps) {
    return (
        <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Web Development</h3>
            <div className="flex flex-wrap gap-4">
                {SkillsList.web.sort().map((item, index) => (
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

export default Web;
