import { CardsListMain, SearchBarContainer } from './styles'
import { Card } from './components/Card'
import { api } from './../../lib/axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProfileCard } from './components/ProfileCard'

interface IssueProps {
  id: number
  number: number
  title: string
  created_at: string
  body: string
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormIssue = zod.infer<typeof searchFormSchema>

export function Home() {
  const { register, handleSubmit, reset } = useForm<SearchFormIssue>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: ' ',
    },
  })

  const [issues, setIssues] = useState([] as IssueProps[])
  const [counter, setCounter] = useState(0)

  const fetchIssues = async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${query || ''}%20repo:NicoBarbosa/github-blog`,
      {
        params: {
          sort: 'created',
          order: 'desc',
        },
      },
    )
    console.log(response.request)
    setCounter(response.data.total_count)
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  async function handleFetchIssues(data: SearchFormIssue) {
    await fetchIssues(data.query)
    reset()
  }

  return (
    <>
      <ProfileCard />
      <SearchBarContainer>
        <div>
          <strong>Publicações</strong>
          <span>{counter} publicações</span>
        </div>
        <form onSubmit={handleSubmit(handleFetchIssues)}>
          <input
            type="search"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>
      </SearchBarContainer>
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
