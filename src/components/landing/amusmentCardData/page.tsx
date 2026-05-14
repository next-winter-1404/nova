import { getHouses } from '@/src/utils/sevices/api/houses/getHouses'
import React from 'react'
import AmusementCard from '../../common/amusementCard/page'

const AmusementCardData = async () => {
    const {houses}:any = await getHouses({
        // propertyType :"villa"
    })
  return (
    <AmusementCard houses = {houses}/>
  )
}

export default AmusementCardData