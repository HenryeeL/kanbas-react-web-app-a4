import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
}

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const newAssignment = action.payload;
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter((assignment) => assignment._id !== action.payload);
        },
        editAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload) {
                    return { ...assignment, editing: true };
                } else {
                    return assignment;
                }
            });
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
    }
})

export const { addAssignment, deleteAssignment, editAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;