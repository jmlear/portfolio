
export default function HomePage() {
  return (
    <>
      <div className="h-full flex items-center justify-center flex-col">
        <h1>Lead Software Developer</h1>
        <p>Experienced, Motivated, Hard working</p>
      </div>
      {/* Circle Background */}
      <div className="hidden lg:block absolute bottom-0 right-0 left-0 top-0 my-auto mx-auto w-96 h-96 bg-blue-900 rounded-full -z-10"></div>
      {/* Floating Left side text */}
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl lg:left-5 xl:left-48 font-bold">
        <span className="text-gray-600">Joel</span>
        <p className="text-red-500">Developer</p>
      </div>
      {/* Text bubble on left */}
      <div className="hidden p-5 lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white h-fit w-1/3">
        <h1 className="text-4xl font-bold text-blue-900">Hi I'm Joel</h1>
        <p className="text-gray-400">I am results-driven with extensive experience in modernizing legacy systems and integrating advanced frameworks.<br/><br/>I am a leader of cross-functional teams and I utilize automation to optimize workflows.<br/><br/>I have a strong problem-solving mindset with a commitment to clean, maintainable code.</p>
        <a href="#contact" className="bg-blue-500 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold">Contact Me</a>
      </div>
      {/* About me section */}
      <div className="px-10">
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* <div className="relative"> */}
          <div className="w-40 h-40 bg-blue-900 rounded-full"></div>
          {/* </div> */}
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
      </div>
    </>
  )
}
