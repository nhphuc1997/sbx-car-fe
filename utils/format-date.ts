import moment from 'moment';

export const formatDate = (date: string, lang: any = "en") => {
  if (!date) return '--'
  const FORMAT = lang === "en" ? "LL" : "DD-MM-YYYY"

  return moment().format(FORMAT)
}
