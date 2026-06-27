
const Footer = () => {
  return (
    <footer className="z-48 flex w-full items-center justify-between overflow-x-clip border-t border-border px-8 py-4 backdrop-blur-sm md:justify-between md:px-20">
      <div className="hidden flex-1 md:block">
        <h1 className="text-xl font-bold">Haney</h1>
      </div>

      <span className="text-xs text-muted-foreground">
        © 2026 Haney. All rights reserved.
      </span>

      <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
        <ul className="flex flex-row items-center gap-6 text-xs text-muted-foreground">
          <li>
            <a
              href="/#home"
              className="focus-visible:ring-0 focus-visible:outline-none focus-visible:text-shadow-lg focus-visible:text-shadow-red-500/50"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="focus-visible:ring-0 focus-visible:outline-none focus-visible:text-shadow-lg focus-visible:text-shadow-red-500/50"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className="focus-visible:ring-0 focus-visible:outline-none focus-visible:text-shadow-lg focus-visible:text-shadow-red-500/50"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className="focus-visible:ring-0 focus-visible:outline-none focus-visible:text-shadow-lg focus-visible:text-shadow-red-500/50"
            >
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
