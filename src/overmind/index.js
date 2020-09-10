/* eslint-disable no-param-reassign */
import { createHook } from "overmind-react"

export const config = {
  state: {
    cardCreated: false,
    cardDetails: null,
  },
  actions: {
    createCard({ state }) {
      state.cardCreated = true
    },
    addCardDetails({ state }, values) {
      state.cardDetails = values
    },
  },
}

export const useOvermind = createHook()
