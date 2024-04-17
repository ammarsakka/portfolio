function Hero() {
    return (
        <div className="grid grid-cols-2 justify-between gap-4 items-center">
            <div className="flex flex-col gap-6">
                <h1 className="font-semibold text-4xl">
                    Hello this is{" "}
                    <span className="text-orange-500 uppercase font-bold">
                        Developer
                    </span>
                </h1>
                <div className="flex flex-col gap-2">
                    <p className="text-lg">Welcome to my portfolio!</p>
                    <p className="text-sm">
                        I'm a dedicated software engineer who absolutely loves
                        creating scalable, efficient, and innovative software
                        solutions. With a wide range of skills across different
                        technologies and methodologies, I pride myself on
                        delivering solutions that truly make a difference for
                        businesses.
                    </p>
                </div>
            </div>
            <div className="flex justify-end">
                <img
                    src={`${process.env.REACT_APP_IMAGE_PLACEHOLDER_URL}/600/400`}
                    alt="this is a placeholder to be replaced with developer one"
                    width={600}
                    height={400}
                    className="rounded-md shadow-md"
                />
            </div>
        </div>
    );
}

export default Hero;
