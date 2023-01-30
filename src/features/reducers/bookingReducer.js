import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  containerDate: [],
}
export const addDateInContainer = createAction('addDateInContainer')

export const bookingReducer = createReducer(initialState, (builder) => {
  builder.addCase(addDateInContainer, (state, action) => {
    if (state.containerDate.length <= 2) {
      state.containerDate.push(action.payload)
    } else {
    }
  })
})
