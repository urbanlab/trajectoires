import {create} from 'zustand'

interface EnqueteState {
    enquete_results: [];
    setResults: (data: any) => void;

}

export const useEnquete = create<EnqueteState>((set, get:any) => ({
  enquete_results: [],
  setResults:(data: any) => set ({enquete_results: data})
}))