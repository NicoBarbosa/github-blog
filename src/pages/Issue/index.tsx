import { PostContent } from './styles'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PostInfo } from './components/PostInfo'

interface IssueBodyProps {
  html_url: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: string
  body: string
}

export function Issue() {
  const [issue, setIssue] = useState({} as IssueBodyProps)

  const { id } = useParams()

  const fetchUniqueIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/NicoBarbosa/github-blog/issues/${id}`,
    )

    setIssue(response.data)
  }, [id])

  useEffect(() => {
    fetchUniqueIssue()
  }, [fetchUniqueIssue])

  return (
    <>
      <PostInfo
        user={issue.user}
        title={issue.title}
        comments={issue.comments}
        html_url={issue.html_url}
        created_at={issue.created_at}
      />
      <PostContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </div>
      </PostContent>
    </>
  )
}
