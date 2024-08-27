export const formatCurrency = (price: string | number) => {
  if (!price) return '--'

  return Number(price).toLocaleString(
    "en-Us",
    {
      style: "currency",
      currency: "VND",
    }
  )
}
