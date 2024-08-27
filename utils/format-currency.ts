export const formatCurrency = (price: string | number, lang: any = "en") => {
  if (!price) return '--'
  const amount = lang === "en" ? price : Number(price) * 26000
  const unit = lang === "en" ? "USD" : "VND"

  return Number(amount).toLocaleString(
    "en-Us",
    {
      style: "currency",
      currency: unit,
    }
  )
}
