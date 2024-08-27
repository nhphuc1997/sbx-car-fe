export const formatDate = (date: string) => {
  if (!date) return '--'
  return new Date(date).toLocaleDateString()
}
