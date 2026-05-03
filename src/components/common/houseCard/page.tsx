import React from 'react'
import InnerHouseCard from '../innerHouseCard/page'

const HouseCard = () => {
  return (
    <div className ='w-[1440px] flex h-[495px] items-center justify-between'>                    
        <InnerHouseCard></InnerHouseCard>
        <InnerHouseCard></InnerHouseCard>
        <InnerHouseCard></InnerHouseCard>
        <InnerHouseCard></InnerHouseCard>
    </div> 
  )
}

export default HouseCard