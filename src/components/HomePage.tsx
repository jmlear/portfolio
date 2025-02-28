
export default function HomePage() {
  return (
    <>
      <div className="h-full flex items-center justify-center flex-col">
        <h1>Software Developer</h1>
        <p>Innovative, Creative, Hard working</p>
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
        <p className="text-gray-400">I am a software developer with lots of experience in...</p>
        <a href="#contact" className="bg-blue-500 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold">Contact Me</a>
      </div>
    </>
  )
}
