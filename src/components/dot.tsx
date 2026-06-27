interface DotProps {
  height: number | string
  width: number | string
  color: string
}

const Dot = ({ color, height, width }: DotProps) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: "50%",
      }}
    ></div>
  )
}

export default Dot
