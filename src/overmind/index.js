import { createHook } from "overmind-react"

export const config = {
  state: {
    cardCreated: false,
    cardDetails: null,
  },
  actions: {
    createCard({ state }) {
      // eslint-disable-next-line no-param-reassign
      state.cardCreated = true
    },
    addCardDetails({ state }, values) {
      // eslint-disable-next-line no-param-reassign
      state.cardDetails = values
    },
  },
}

export const useOvermind = createHook()
