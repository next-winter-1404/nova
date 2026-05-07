interface BlureLightCircleProps {
    bgColor:string;
}

const BlureLightCircle = ({bgColor}: BlureLightCircleProps) => {
  return (
    <div style={{ backgroundColor: bgColor }} className='absolute top-5 -left-8 w-54.5 h-54.5 blur-[95px] bg-[${bgColor}] rounded-full'></div>
  )
}

export default BlureLightCircle
