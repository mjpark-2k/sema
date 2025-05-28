import { getData } from "@/utils/apiFun";
import { create } from "zustand";




const useStore = create(set => ({
    data:null,
    dataSave:async (d)=>{
        set({data:d})
    }
}))

export default useStore