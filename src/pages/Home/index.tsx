import {
  CardsListMain,
  DataSectionProfile,
  ProfileCard,
  SearchBarContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Card } from './components/Card'
import { api } from './../../lib/axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface ProfileGitHubProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string | null
  followers: number
  html_url: string
}

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

  const [profile, setProfile] = useState({} as ProfileGitHubProps)
  const [issues, setIssues] = useState([] as IssueProps[])
  const [counter, setCounter] = useState(0)

  const fetchUserGithub = async () => {
    const response = await api.get('/users/NicoBarbosa')
    setProfile(response.data)
  }

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
    fetchUserGithub()
    fetchIssues()
  }, [])

  async function handleFetchIssues(data: SearchFormIssue) {
    await fetchIssues(data.query)
    reset()
  }

  return (
    <>
      <ProfileCard>
        <img src={profile.avatar_url} alt={'Foto de' + profile.name} />
        <DataSectionProfile>
          <header>
            <strong>{profile.name}</strong>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <p>{profile.bio}</p>
          <div>
            <span>
              <FontAwesomeIcon icon={faGithub} className="iconAwesome" />
              {profile.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} className="iconAwesome" />
              {profile.company != null ? profile.company : 'Sem empresa'}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} className="iconAwesome" />
              {profile.followers}{' '}
              {profile.followers < 2 ? 'seguidor' : 'seguidores'}
            </span>
          </div>
        </DataSectionProfile>
      </ProfileCard>
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
