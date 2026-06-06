import { useRouter } from 'next/navigation'
import React from 'react'
import { steps } from './steps';

const useStepNavigation = () => {
    const router = useRouter();
    const goToNext = (currentStepId : string) => {
        const currentIndex = steps.findIndex(s => s.id === currentStepId);
        if (currentIndex < steps.length -1) {
            const nextStep = steps[currentIndex +1]
            router.push(`/dashboard/seller/estate-management/processcreate/${nextStep.id}?step=${nextStep.id}`);
        }
    };

    const goToPrev = (currentStepId: string) => {
        const currentIndex = steps.findIndex(s => s.id === currentStepId);
        if (currentIndex > 0) {
            const prevStep = steps[currentIndex -1]
            router.push(`${prevStep.id}?step=${prevStep.id}`)
        } else {
            router.push("/dashboard/seller/estate-management/processcreate")
        }
    }
  return {goToNext, goToPrev};
}

export default useStepNavigation