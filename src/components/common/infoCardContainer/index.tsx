import {ReactNode} from 'react'

const InfoCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:w-[329px] bg-dark-700 border border-gray-550 flex flex-col items-center rounded-[32px] pb-4 pr-4 pl-6">
    
      {children}
      </div>
  )
}

export default InfoCardContainer