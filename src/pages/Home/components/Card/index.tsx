import { CardContainer } from './styles'
import { formatDateDistanceToNow } from '../../../../utils/date'

interface CardContainerProps {
  issueNumber: number
  issueTitle: string
  issueDateStart: string
  description: string
}

export function Card({
  issueNumber,
  issueTitle,
  issueDateStart,
  description,
}: CardContainerProps) {
  return (
    <CardContainer to={`/issue/${issueNumber}`}>
      <header>
        <h2>{issueTitle}</h2>
        <span>{formatDateDistanceToNow(issueDateStart)}</span>
      </header>
      <p>{description}</p>
    </CardContainer>
  )
}
