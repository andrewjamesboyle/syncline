import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

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

const Services = () => {
  const handleNavigation = () => {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="Services">
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
                      <button
                        onClick={() => {
                          handleNavigation()
                        }}
                        className="text-sm font-semibold leading-6 text-blue-400"
                      >
                        Contact <span aria-hidden="true"></span>
                      </button>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
