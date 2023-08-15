import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostContent, PostInfo } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

  console.log(issue)

  return (
    <>
      <PostInfo>
        <header>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            Ver no GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <h1>{issue.title}</h1>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} className="fontAwesomeIcon" />
            {issue.user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} className="fontAwesomeIcon" />
            {issue.created_at}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" />
            {`${issue.comments} comentários`}
          </span>
        </div>
      </PostInfo>
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
