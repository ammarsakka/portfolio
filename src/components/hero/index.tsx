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
                        I graduated as a Software Engineer from University Kuala
                        Lumpur, Malaysia, where I honed my technical skills and
                        passion for coding. Additionally, I hold another degree
                        in Accounting from my home country. Balancing the worlds
                        of technology and finance has given me a unique
                        perspective, blending analytical thinking with creative
                        problem-solving. I'm excited to bring this diverse
                        background to everything I do!
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
