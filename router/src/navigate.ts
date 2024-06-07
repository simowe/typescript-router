import { sendRefreshEvent } from "./sendRefreshEvent"

export const navigate = (path: string) => {
  window.history.pushState(null, "", path)
  sendRefreshEvent()
}
