import {create} from 'zustand';


interface ICompareStore {
    compareIds : number[];
    toggleCompare : (id:number) => void;
}

export const useCompareStore = create<ICompareStore>((set) => ({
    compareIds : [],
    toggleCompare : (id) => 
    set((state) => ({
        compareIds : state.compareIds.includes(id) 
        ? state.compareIds.filter((item) => item !== id)
        : [...state.compareIds, id]
    }))
}))