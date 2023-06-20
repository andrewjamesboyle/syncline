const Testimonials = () => {
  return (
    <section id="Testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <img className="h-12 self-start" src="/mtvc.jpg" alt="" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Syncline's approach to our business needs has been remarkably
                  intuitive. Their team's dedication to understanding our unique
                  requirements and delivering tailored solutions has resulted in
                  a significantly streamlined marketing process. Our social
                  media management has never been smoother, allowing our team to
                  focus more on what we love – riding our bikes and helping our
                  customers do the same.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="/rafe.jpg"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Rafe Lehner</div>
                  <div className="mt-1 text-gray-500">
                    Owner - Mountain View Cycles
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img className="h-12 self-start" src="/pinnacle.jpg" alt="" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Syncline's approach to our specific needs has been genuinely
                  customized. Their team's dedication to comprehending our
                  unique demands and delivering fitting solutions has led to a
                  radical transformation of our business's online presence and
                  our customers' success."
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="/tre.jpg"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Tre Hendricks
                  </div>
                  <div className="mt-1 text-gray-500">
                    Owner - Pinnacle Mt. Hood
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
