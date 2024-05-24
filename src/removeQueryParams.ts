export const removeQueryParams = (path: string) => {
  return path.replace(/\?.*$/, "")
}
