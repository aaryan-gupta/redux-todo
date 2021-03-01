import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/todoSlice'
export default configureStore({
	reducer: {
		todos: todoSlice
	},
});
