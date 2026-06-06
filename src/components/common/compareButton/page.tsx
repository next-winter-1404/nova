'use client'

interface IProps {
    propertyId : number
}

import { useCompareStore } from '@/src/stores/compare-store'
import { LuScale } from 'react-icons/lu'

const CompareButton = ({propertyId} : IProps) => {
    const {compareIds, toggleCompare } = useCompareStore();
    const isSelected = compareIds.includes(propertyId)
    const isLimitReached = compareIds.length >= 4 && !isSelected;
    return (
        <button 
            onClick={() => toggleCompare(propertyId)}
            disabled={isLimitReached}
            className={`cursor-pointer transition ${
                isSelected ? 'text-primary-accent-green' : 'text-gray-300'
            }`}
        >
            <LuScale size={26}/>
        </button>
    )
}

export default CompareButton