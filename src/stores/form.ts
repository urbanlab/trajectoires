import {create} from "zustand"



export const useForm = create((set) => ({
    form: {},
    setForm : (data: any) => set({form: data})
}))