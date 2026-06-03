import {FC, ReactNode} from 'react'
interface IInfoCard{
  children:ReactNode,
  icon?:ReactNode,
  labelText?:string,
  twParentClassName?:string,
}
const InfoCardContainer:FC<IInfoCard> = ({ children ,icon,labelText ,twParentClassName="lg:w-[329px]"}) => {
  return (
    <div className={`${twParentClassName} gap-6 bg-dark-700 border border-gray-550 flex flex-col items-center rounded-[32px] pb-4 pr-4 pl-6`}>
     <div className="w-[233px] h-[50px] bg-gray-550 rounded-b-[32px] flex-center gap-2 text-semibold-20">
              <span>{labelText} </span>
              {icon}
            </div>
      {children}
      </div>
  )
}

export default InfoCardContainer