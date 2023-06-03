import { MetaTags } from '@redwoodjs/web'

import Container from 'src/components/Container'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer | Marketing Consultant
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Andrew, a software developer and digital marketing consultant
            based in Hood River, OR. I’m the founder and CEO of Syncline
            Software Solutions, where we develop solutions that empower small
            business owners to leverage generative AI tools to achieve better
            marketing results.
          </p>
        </div>
      </Container>
    </>
  )
}

export default HomePage
