import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import { MetaTags } from '@redwoodjs/web'

const features = [
  {
    name: 'Web Application Development',
    description:
      'Custom website and full-stack software applications, built from scratch or on top of powerful platforms like WordPress and Shopify.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Actionable Insights',
    description:
      'What gets measured gets managed. Drive results through precise measurements and insightful analytics.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Solutions Architecture',
    description:
      "Integrate existing software solutions with your business's current ecosystem to streamline and automate tedious processes.",
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Digital Marketing',
    description:
      'Leverage generative AI and other marketing automation tools to streamline your content creation and keep your audience engaged.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SEO',
    description:
      "Your site may look great, but if it doesn't exist on Google, it doesn't exist.",
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Need something else?',
    description:
      'We thrive on finding original solutions to novel and challenging problems. Contact us today to discuss your needs.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

const HomePage = () => {
  return (
    <>
      <>
        <MetaTags title="Home" description="Home page" />
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
                <a
                  href="#"
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
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
                  At Syncline Software Solutions, we're more than just software
                  engineers, web developers, digital marketers, and data
                  analysts. We're avid mountain bikers and relentless problem
                  solvers, driven by a simple but compelling belief: technology
                  should be a tool that frees, not confines.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our mission? To empower small businesses to scale
                  unprecedented digital heights with bespoke, powerful, and
                  seamless technological solutions. Just as each trail presents
                  unique challenges and thrills, we recognize that every
                  business has its unique needs and aspirations. That's why our
                  solutions are not one-size-fits-all but are meticulously
                  tailored to address your specific hurdles and help you seize
                  your unique opportunities. We leverage advanced technological
                  solutions, such as generative AI, to streamline operations,
                  magnify impact, and optimize time and resources. Why? So you
                  can focus on what truly matters, serving your customers,
                  growing your business, or even catching that perfect sunrise
                  ride.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Grounded in data-driven insights and empathetic communication,
                  we hone in on your unique challenges, crafting custom
                  solutions that directly address your pain points. And once
                  we've implemented these solutions, we won't just say goodbye.
                  We'll see you out there on the trails, celebrating your
                  success amidst nature's grandeur. Because at Syncline, we're
                  not just building software solutions, we're helping build
                  dreams. And we can't wait to be part of yours.
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
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Our Expertise
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Web Development
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Digital Marketing
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Data Analytics
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-blue-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-blue-400"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <img
                className="h-12 self-start"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                alt=""
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>
                    “Syncline's approach to our business needs has been
                    remarkably intuitive. Their team's dedication to
                    understanding our unique requirements and delivering
                    tailored solutions has resulted in a significantly
                    streamlined marketing process. Our social media management
                    has never been smoother, allowing our team to focus more on
                    what we love – exploring the outdoors and helping our
                    customers do the same.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">
                      Rafe Lehner
                    </div>
                    <div className="mt-1 text-gray-500">
                      Owner - Mountain View Cycles
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <img
                className="h-12 self-start"
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                alt=""
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>
                    “Syncline's approach to our specific needs has been
                    genuinely customized. Their team's dedication to
                    comprehending our unique demands and delivering fitting
                    solutions has led to a radical transformation of our
                    marketing process. Managing our social media has never been
                    more efficient, freeing up our team to concentrate on our
                    passion—embracing the outdoors and facilitating our
                    customers to do the same.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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

      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="white"
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to navigate your digital journey with ease? Let's talk.
                Whether you have a project in mind, need advice on your digital
                strategy, or simply want to learn more about how we can empower
                your business, we're here to help. Send us a message, give us a
                call, or drop us an email – we can't wait to hear from you.
                Together, let's scale new heights and create solutions that make
                a difference. Your next big adventure starts here — we'll see
                you at the trailhead.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>Hood River, OR 97031</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="tel:+1 (555) 234-5678"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:hello@example.com"
                    >
                      info@synclinesoftware.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default HomePage
