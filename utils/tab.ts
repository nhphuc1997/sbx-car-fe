export const getUrlsBaseOn = (tabValue: string) => {
  if (!tabValue) {
    return "/exteriors"
  }
  return {
    "ALL": "/exteriors",
    "EXTERIOR": "/exteriors",
    "INTERIOR": "/interiors",
    "MECHANICAL": "/mechanicals",
    "DOCUMENTS": "/documents",
    "VIDEOS": "/mechanicals",
  }[tabValue]
}