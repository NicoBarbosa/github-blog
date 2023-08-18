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

interface IssuesContextType {
  profile: ProfileGitHubProps
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesContextProviderProps {
  children: ReactNode
}

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [profile, setProfile] = useState({} as ProfileGitHubProps)

  const fetchUserGithub = async () => {
    const response = await api.get('/users/NicoBarbosa')
    setProfile(response.data)
  }

  useEffect(() => {
    fetchUserGithub()
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        profile,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
