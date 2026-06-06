'use client'

interface IProps {
    propertyId : number
}

import { useCompareStore } from '@/src/stores/compare-store'
import React from 'react'
import { LuScale } from 'react-icons/lu'

const CompareButton = ({propertyId} : IProps) => {
    const {compareIds, toggleCompare } = useCompareStore();
    const isSelected = compareIds.includes(propertyId)
    return (
        <button 
            onClick={() => toggleCompare(propertyId)}
            className={`cursor-pointer transition ${
                isSelected ? 'text-primary-accent-green' : 'text-gray-300'
            }`}
        >
            <LuScale size={26}/>
        </button>
    )
}

export default CompareButton