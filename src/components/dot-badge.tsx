import React from "react"
import { Badge } from "./ui/badge"
import Dot from "./dot"

const DotBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <Badge className="mb-8 gap-2 border border-border bg-secondary/50 px-5 py-4">
      <Dot color="#ff3333" height={8} width={8} />{" "}
      <span className="font-mono text-sm text-muted-foreground">
        {children}
      </span>
    </Badge>
  )
}

export default DotBadge
