import {create} from 'zustand';


interface ICompareStore {
    compareIds : number[];
    toggleCompare : (id:number) => void;
}

export const useCompareStore = create<ICompareStore>((set) => ({
    compareIds : [],
    toggleCompare: (id) =>
    set((state) => {
        const exists = state.compareIds.includes(id);
    
        if (exists) {
        return {
            compareIds: state.compareIds.filter(
            (item) => item !== id
            ),
        };
        }
        if (state.compareIds.length >= 4) {
        return state;
        }
        return {
        compareIds: [...state.compareIds, id],
        };
    }),
}))