import { Badge } from "./ui/badge"

const StackBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <Badge className="m-1 gap-2 border border-[#ff3333]/40 bg-[#ff4444]/10 px-3 py-1">
      <span className="font-mono text-sm font-thin text-red-500">
        {children}
      </span>
    </Badge>
  )
}

export default StackBadge
