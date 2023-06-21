const About = () => {
  return (
    <>
      <section id="About">
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-7 lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="lg:py-25 relative px-6 py-10 sm:py-10 lg:px-8 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    What We Believe
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    At Syncline Software Solutions, we're more than just
                    software engineers, web developers, digital marketers, and
                    data analysts. We're explorers, creators, and relentless
                    problem solvers, driven by a simple but compelling belief:
                    technology should be a tool that frees, not confines.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    We recognize that every business has its unique needs and
                    aspirations. That's why our solutions are not
                    one-size-fits-all but are meticulously tailored to address
                    your specific hurdles and help you seize your unique
                    opportunities. We leverage advanced technological solutions,
                    such as generative AI, to streamline operations, magnify
                    impact, and optimize time and resources. Why? So you can
                    focus on what truly matters, serving your customers and
                    growing your business, with the peace of mind of having
                    robust solutions in place.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Grounded in data-driven insights and empathetic
                    communication, we hone in on your unique challenges,
                    crafting custom solutions that directly address your pain
                    points. At Syncline, we're not just building software
                    solutions, we're helping build dreams. And we can't wait to
                    be part of yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src="/sunburst.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
