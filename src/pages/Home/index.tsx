import { CardsListMain } from './styles'
import { Card } from './components/Card'
import { useContext } from 'react'
import { ProfileCard } from './components/ProfileCard'
import { IssuesContext } from '../../contexts/IssuesContext'
import { SearchBar } from './components/SearchBar'

export function Home() {
  const { issues } = useContext(IssuesContext)

  return (
    <>
      <ProfileCard />
      <SearchBar />
      <CardsListMain>
        {issues.map((issue) => {
          return (
            <Card
              key={issue.id}
              issueTitle={issue.title}
              issueNumber={issue.number}
              issueDateStart={issue.created_at}
              description={issue.body}
            />
          )
        })}
      </CardsListMain>
    </>
  )
}
