import { useEffect, useRef, Fragment } from 'react'

// import { Popover, Transition } from '@headlessui/react'
// import clsx from 'clsx'

// import { Link } from '@redwoodjs/router'

import Container from './Container'

function Header() {
  const isHomePage = window.location.pathname === '/'

  const headerRef = useRef<HTMLDivElement>(null)
  // const avatarRef = useRef<HTMLDivElement>(null)
  // const isInitial = useRef(true)

  useEffect(() => {
    // Implement your effect here
  }, [isHomePage])

  return (
    <>
      <header ref={headerRef}>
        <Container className="px-6">{/* ... */}</Container>
      </header>
      {/* ... */}
    </>
  )
}

export default Header
