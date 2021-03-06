import { configureStore } from '@reduxjs/toolkit'
import todoReduser from '../features/todoSlice'

export default configureStore({
	reducer: {
		todos: todoReduser
	},
})
