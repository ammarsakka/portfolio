function Hero() {
  return (
    <div className="grid mobile:grid-cols-2 justify-between gap-4 items-center">
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-4xl">
          Hello this is{" "}
          <span className="text-logo-orange capitalize font-bold">Ammar Sakka</span>
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-lg">Welcome to my portfolio!</p>
          <p className="text-sm">
            I'm a dedicated software engineer who absolutely loves creating
            scalable, efficient, and innovative software solutions. With a wide
            range of skills across different technologies and methodologies, I
            pride myself on delivering solutions that truly make a difference
            for businesses.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-full mobile:w-[400px]">
          <img
            src="./images/main/Ammar-Portfolio.png"
            alt="this is a placeholder to be replaced with developer one"
            className="rounded-md w-full h-full object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
