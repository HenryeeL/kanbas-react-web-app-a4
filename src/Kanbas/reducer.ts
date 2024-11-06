import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from './Database';

const initialState = {
    enrollments: enrollments,
}

const enrollmentSlice = createSlice({
    name: 'enrollment',
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment = {
                _id: new Date().getTime().toString(),
                course: enrollment.course,
                user: enrollment.user
            };
            state.enrollments = [...state.enrollments, newEnrollment];
        },
        deleteEnrollment: (state, { payload: enrollment }) => {
            const enrollmentToDelete = state.enrollments.find(e => e.user === enrollment.user && e.course === enrollment.course);
            if (enrollmentToDelete) {
                state.enrollments = state.enrollments.filter(enrollment => enrollment._id !== enrollmentToDelete._id);
            }
        }
    }
})

export const { addEnrollment, deleteEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;