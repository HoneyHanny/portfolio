import { type ReactNode } from 'react'

const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full text-lg md:text-xl leading-relaxed text-muted-foreground">{children}</div>
  )
}

export default Paragraph