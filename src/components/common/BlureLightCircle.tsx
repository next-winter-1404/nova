interface BlureLightCircleProps {
    bgColor:string;
    position:string;
}

const BlureLightCircle = ({bgColor,position}: BlureLightCircleProps) => {
  return (
    <div  className={`absolute ${position} w-54.5 h-54.5 blur-[120px] ${bgColor} rounded-full animate-soft-blink-move`}></div>
  )
}

export default BlureLightCircle
