import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDateDistanceToNow(data: string) {
  const response = new Date(data)
  const formatedDate = formatDistanceToNow(response, {
    locale: ptBR,
    addSuffix: true,
  })

  return formatedDate
}
