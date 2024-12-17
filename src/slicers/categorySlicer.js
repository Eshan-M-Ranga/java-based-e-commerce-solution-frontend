import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
    categories:[]
}


export const categorySlicer = createSlice({
    name:'categorySlicer',
    initialState,
    reducers:{
        loadCategories: (state,action)=>{
            return {
                ...state,
                categories: action?.payload
            }
        }
    }
})

export const { loadCategories } = categorySlicer?.actions;

export default categorySlicer.reducer;