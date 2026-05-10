interface DividerProps {
    width: string;
    height: string;
    color: string;
}

const Divider = (
    { width,
      height,
    color}
: DividerProps) => {
  return (
    <div style={
        {height: `${height}px`,
        background: `${color}`,
        width: `${width}px`
    }}>
      
    </div>
  )
}

export default Divider;
