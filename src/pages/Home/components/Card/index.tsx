import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CardContainer } from './styles'

interface CardContainerProps {
  issueLink: string
  issueTitle: string
  issueDateStart: Date
  description: string
}

export function Card({
  issueLink,
  issueTitle,
  issueDateStart,
  description,
}: CardContainerProps) {
  return (
    <CardContainer href={issueLink}>
      <header>
        <h2>{issueTitle}</h2>
        <span>
          {formatDistanceToNow(issueDateStart, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>
      <p>{description}</p>
    </CardContainer>
  )
}
