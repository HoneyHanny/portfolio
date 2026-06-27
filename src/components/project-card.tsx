import { Card, CardContent, CardHeader } from "./ui/card"
import { Github, SquareArrowOutUpRight } from "lucide-react"
import { Button } from "./ui/button"
import StackBadge from "./stack-badge"

interface ProjectCard {
  title: string
  description: string
  website?: string
  github?: string
  techStacks: string[]
}

const ProjectCard = ({
  title,
  description,
  website,
  github,
  techStacks,
}: ProjectCard) => {
  return (
    <Card className="group relative transition-all hover:shadow-lg hover:ring-1 hover:shadow-[#ff3333]/10 hover:ring-[#ff3333]/50">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <CardHeader className="flex justify-between">
        <span className="text-xl font-bold text-foreground">{title}</span>
        <div className="flex justify-around gap-2 text-muted-foreground">
          {website && (
            <Button
              size="icon"
              variant="outline"
              className="hover:text-brand focus-visible:border-red-500 focus-visible:ring-red-500 focus-visible:outline-none"
              onClick={() => {
                window.open(website, "_blank", "noopener,noreferrer")
              }}
            >
              <SquareArrowOutUpRight />
            </Button>
          )}
          {github && (
            <Button
              size="icon"
              variant="outline"
              className="hover:text-[#ff3333]! focus-visible:border-red-500 focus-visible:ring-red-500 focus-visible:outline-none"
              onClick={() => {
                window.open(github, "_blank", "noopener,noreferrer")
              }}
            >
              <Github />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <span className="text-muted-foreground">{description}</span>
        <div className="mt-4">
          {techStacks.map((stack) => (
            <StackBadge>{stack}</StackBadge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
