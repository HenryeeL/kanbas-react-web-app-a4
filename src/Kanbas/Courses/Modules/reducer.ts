import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database"
const initialState = {
    modules: modules
}
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, { payload: module }) => {
            const newModule : any = {
                _id : new Date().getTime().toString(),
                lessons: [],
                name: module.name,
                course: module.course
            }
            state.modules = [...state.modules, newModule] as any
        },
        deleteModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.filter((module : any) => module._id !== moduleId)
        },
        editModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.map((module : any) => module._id === moduleId ? { ...module, editing: true } : module) as any
        },
        updateModule: (state, { payload: module }) => {
            state.modules = state.modules.map((m : any) => m._id === module._id ? module : m) as any
        }
    }
})

export const { addModule, deleteModule, editModule, updateModule } = modulesSlice.actions
export default modulesSlice.reducer