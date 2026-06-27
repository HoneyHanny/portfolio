import React from "react"

interface HeadingProps {
  children: string
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <span className="w-full text-3xl font-bold md:text-4xl">{children}</span>
  )
}

export default Heading
