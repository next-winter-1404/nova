interface BlureLightCircleProps {

    position:string;
}

const BlureLightCircle = ({position}: BlureLightCircleProps) => {
  return (
    <div  className={`absolute ${position} w-[140px] h-[120px]  rounded-full blikingBlob `}>
      <div className="blob"></div>
    </div>
  )
}

export default BlureLightCircle
