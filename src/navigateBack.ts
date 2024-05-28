import { sendRefreshEvent } from "./sendRefreshEvent"

const initialHistoryLength = window.history.length

export const navigateBack = () => {
  const isSafeToGoBack = window.history.length > initialHistoryLength

  if (isSafeToGoBack) {
    window.history.back()
  } else {
    window.history.pushState(null, "", "/")
  }

  sendRefreshEvent()
}
