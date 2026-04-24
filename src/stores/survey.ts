import {create} from 'zustand'

interface SurveyState {
    survey: any;
    setSurvey: (data: any) => void;
}

export const useSurvey = create<SurveyState>((set, get:any) => ({
  survey: null,
  setSurvey:(data: any) => set ({survey: data})
}))