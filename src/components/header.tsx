import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const Header = () => {
  return (
    <header className="fixed z-49 flex w-full items-center justify-between overflow-x-clip border-b border-border px-8 py-4 backdrop-blur-sm md:justify-between md:px-20">
      {/* Desktop Section */}
      <div className="hidden flex-1 md:block">
        <h1 className="text-xl font-bold">Haney</h1>
      </div>
      <nav className="hidden items-center gap-8 md:flex">
        <ul className="flex flex-row items-center gap-6 text-sm text-muted-foreground">
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
          <li>
            <a
              href="/#contact"
              className="focus-visible:ring-0 focus-visible:outline-none focus-visible:text-shadow-lg focus-visible:text-shadow-red-500/50"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="hidden flex-1 justify-end md:flex">
        <a href="/#contact">
          <Button className="border-none bg-[#ff3333] px-6 py-5 text-white shadow-md shadow-red-500/10 transition-all hover:bg-[#ff3333]/90 hover:shadow-red-500/20 focus-visible:ring-1 focus-visible:ring-red-500 focus-visible:outline-none">
            Get in Touch
          </Button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <h1 className="text-xl font-bold">Haney</h1>
      </div>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="border-border bg-transparent px-4 py-5">
              <Menu className="h-5 w-5 text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuItem>
              <a href="/">Home</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/#about">About</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/#projects">Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/#skills">Skills</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/#contact">Contact</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
