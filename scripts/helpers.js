import { snakeCase } from 'change-case'
import { format } from 'date-fns'

export function makeKey(str, append) {
  // console.log(typeof str)
  const key = append
    ? `${snakeCase(str)}_${append}`
    : snakeCase(str)

  return key
}

export const formatDate = (date) => {
  const testDate = date.replace(' 00:00:00 +0000', '')
  if (Date.parse(testDate)) {
    return format(new Date(testDate), 'MMMM dd, yyyy')
  }
  return ''

}