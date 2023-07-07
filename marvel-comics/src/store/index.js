import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './characters'

export default configureStore({
  reducer: {
    characters: charactersReducer
  }
})
