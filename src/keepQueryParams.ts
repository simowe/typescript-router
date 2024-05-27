export const keepQueryParams = (path: string) => {
  return path.replace(/^.*\?/, "")
}
