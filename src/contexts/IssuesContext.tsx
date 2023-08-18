import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

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

interface IssuesContextType {
  profile: ProfileGitHubProps
  issues: IssueProps[]
  fetchIssues: (query?: string) => void
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesContextProviderProps {
  children: ReactNode
}

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [profile, setProfile] = useState({} as ProfileGitHubProps)
  const [issues, setIssues] = useState([] as IssueProps[])

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
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchUserGithub()
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        profile,
        issues,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
