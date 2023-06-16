const Hero = () => {
  const handleNavigation = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section id="Hero">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="/tetons.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              We are builders, creators, and problem solvers.{' '}
            </div>
          </div>
          <div className="text-center">
            <h1 className="-z-1 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Syncline Software Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Inspired by the majestic mountain biking trails of Hood River,
              Oregon, Syncline Software Solutions breathes the same spirit of
              adventure into the realm of technology. Schedule a consultation
              with us today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => handleNavigation('Contact')}
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </button>
              <button
                onClick={() => handleNavigation('About')}
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
