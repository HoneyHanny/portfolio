import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"

interface StackCardProps {
  icon: ReactNode
  header: string
  techStacks: string[]
}

const StackCard = ({ icon, header, techStacks }: StackCardProps) => {
  return (
    <Card className="relative transition-all hover:shadow-lg hover:ring-1 hover:shadow-[#ff3333]/10 hover:ring-[#ff3333]/50">
      <div className="absolute inset-0 bg-linear-to-br from-[#ff3333]/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-border bg-[#ff3333]/20">
          {icon}
        </div>
        <span className="text-lg font-bold">{header}</span>
      </CardHeader>
      <CardContent className="">
        {techStacks.map((stack) => (
          <Badge
            variant="secondary"
            className="m-1 p-1 px-3 font-mono text-muted-foreground"
          >
            {stack}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}

export default StackCard
