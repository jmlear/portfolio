
export default function HomePage() {
  return (
    <>
      {/* Floating Left side text */}
      <div className="static flex flex-col justify-center text-center h-1/2 md:text-left md:h-auto md:absolute md:top-1/3 md:left-5 text-xl sm:text-4xl lg:left-5 xl:left-48 font-bold">
        <span className="text-gray-600">Joel</span>
        <p className="text-red-500">Developer</p>
      </div>
      {/* Make div using tailwind css that spans the width of the screen but the text inside stays within the middle 1/3 of the screen and wraps as the screen gets smaller */}
      {/* <div className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-blue-900 rounded-full"></div> */}
      <div className="h-1/2 md:h-full w-full flex items-center justify-center flex-col gap-5 text-center">
        <div className="flex flex-col w-60 lg:w-80">
          <h1>Lead Software Developer</h1>
          <p>Experienced, Motivated, Hard working</p>
        </div>
      </div>
      {/* Circle Background */}
      <div className="hidden md:block absolute bottom-0 right-0 left-0 top-0 my-auto mx-auto w-96 h-96 bg-blue-900 rounded-full -z-10"></div>
      {/* Text bubble on right */}
      <div className="hidden p-5 md:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white h-fit w-1/3">
        <h1 className="text-4xl font-bold text-blue-900">Hi I'm Joel</h1>
        <p className="text-gray-400">I am results-driven with extensive experience in modernizing legacy systems and integrating advanced frameworks.<br /><br />I am a leader of cross-functional teams and I utilize automation to optimize workflows.<br /><br />I have a strong problem-solving mindset with a commitment to clean, maintainable code.</p>
        {/* Make links to LinkedIn, GitHub that open in new tab */}
        {/* Make a container for the two link buttons that puts them in one row */}
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/joel-lear/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold">LinkedIn</a>
          <a href="https://github.com/jmlear" target="_blank" className="bg-blue-500 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold">GitHub</a>
        </div>
      </div>
      {/* About me section */}
      {/* <div className="px-10">
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          
          <div className="w-40 h-40 bg-blue-900 rounded-full"></div>
          
          <div className="my-auto flex flex-col gap-3">
            <h1 className="font-bold text-blue-900">About Me</h1>
            <h1 className="text-3xl font-medium">Better Design</h1>
            <h1 className="text-3xl font-medium">Better Experience</h1>
            <p className="text-gray-400">I am a software developer with lots of experience in...</p>
            <h2 className="text-gray-400 font-medium">HTML</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-full h-1.5 bg-blue-900 rounded-md"></div>
            </div>
            <h2 className="text-gray-400 font-medium">Javascript</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-full h-1.5 bg-blue-900 rounded-md"></div>
            </div>
            <h2 className="text-gray-400 font-medium">React</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-full h-1.5 bg-blue-900 rounded-md"></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
