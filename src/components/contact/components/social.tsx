import React from "react";
import { SocialMedia } from "../constants/social";
import { useAppSelector } from "../../../assets/hooks";

function Social() {
    const theme = useAppSelector((state) => state.theme.value);

    return (
        <div className="grid gap-6">
            <div className="flex gap-4 items-center">
                <span className="block w-full h-[1px] bg-zinc-800 dark:bg-slate-100"></span>
                <h3 className="gorw whitespace-nowrap text-lg capitalize tracking-wide">
                    or connect with me on
                </h3>
                <span className="block w-full h-[1px] bg-zinc-800 dark:bg-slate-100"></span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {SocialMedia.sort().map((social, index) => (
                    <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="basis-6"
                        title={social.title}
                    >
                        <img
                            src={`/images/icons/${theme}/${social.title}.svg`}
                            alt={social.title}
                            width={24}
                            height={24}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Social;
