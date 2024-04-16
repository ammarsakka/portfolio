function Hero() {
    return (
        <div className="grid grid-cols-2 justify-between gap-4 items-center">
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-4xl">
                    Hello this is{" "}
                    <span className="text-orange-500 uppercase font-bold">
                        Developer
                    </span>
                </h1>
                <div className="flex flex-col gap-6">
                    <p className="text-lg">I'm an software engineer</p>
                    <p className="text-base">Welcome to my website!</p>
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
