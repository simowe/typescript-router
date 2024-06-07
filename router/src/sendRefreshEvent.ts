import { REFRESH_EVENT_NAME } from "./constants"

export const sendRefreshEvent = () => {
  const event = new CustomEvent(REFRESH_EVENT_NAME)
  window.dispatchEvent(event)
}
