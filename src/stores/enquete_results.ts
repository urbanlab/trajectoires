import {create} from "zustand"

interface EnqueteState {
    enquete_results: any;
    setResults: (data: any) => void;
}

export const useEnquete = create<EnqueteState>((set, get:any) => ({
    enquete_results: null,
    setResults:(data: any) => set ({enquete_results: data})
}))