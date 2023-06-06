import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      {/* <>
        <h1>
          <Link to={routes.home()}>Syncline Software Solutions, LLC.</Link>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav> */}
      {/* </> */}
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
