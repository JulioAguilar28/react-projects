import { createSlice } from '@reduxjs/toolkit'

export const charactersReducer = createSlice({
  name: 'store',
  initialState: {
    characters: []
  },
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
    }
  }
})

export const { setCharacters } = charactersReducer.actions
export default charactersReducer.reducer
