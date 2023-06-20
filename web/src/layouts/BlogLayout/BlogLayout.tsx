// import { Link, routes } from '@redwoodjs/router'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <div className="bg-gray-900">
        <Header />
      </div>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default BlogLayout
